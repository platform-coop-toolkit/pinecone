/**
 * Tabs class.
 *
 * @see https://github.com/zachleat/seven-minute-tabs/
 */
class Tabs {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, options ) {
		this.container = container;
		this.tablist = this.container.querySelector( '[role="tablist"]' );
		this.buttons = this.container.querySelectorAll( '[role="tab"]' );
		this.panels = this.container.querySelectorAll( '[role="tabpanel"]' );
		this.delay = this.determineDelay();

		this.config = {
			...{
				groupSelector: '.tabs'
			},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.handleKeyUp = this.handleKeyUp.bind( this );
		this.initButtons = this.initButtons.bind( this );
		this.initPanels = this.initPanels.bind( this );

		this.initButtons();
		this.initPanels();
	}

	/**
	 * Enumerate key codes that we need to detect.
	 */
	get keys() {
		return {
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
	}

	/**
	 * Determine direction based on key pressed.
	 */
	get direction() {
		return {
			37: -1,
			38: -1,
			39: 1,
			40: 1
		};
	}

	/**
	 * Initialize buttons.
	 */
	initButtons() {
		let count = 0;
		for ( const button of this.buttons ) {
			const isSelected = 'true' === button.getAttribute( 'aria-selected' );
			button.setAttribute( 'tabindex', isSelected ? '0' : '-1' );

			button.addEventListener( 'click', this.handleClick );
			button.addEventListener( 'keydown', this.handleKeyDown );
			button.addEventListener( 'keyup', this.handleKeyUp );

			button.index = count++;
		}
	}

	/**
	 * Initialize panels.
	 */
	initPanels() {
		const selectedPanelId = this.container.querySelector( '[role="tab"][aria-selected="true"]' ).getAttribute( 'aria-controls' );
		for( const panel of this.panels ) {
			if( panel.getAttribute( 'id' ) !== selectedPanelId ) {
				panel.setAttribute( 'hidden', '' );
			}
			panel.setAttribute( 'tabindex', '0' );
		}
	}

	/**
	 * Handle click.
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		const button = event.target;

		if ( 'A' === button.tagName ) {
			event.preventDefault();
		}

		this.activateTab( button, false );
	}

	/**
	 * Deactivate all tabs.
	 */
	deactivateTabs() {
		for ( const button of this.buttons ) {
			button.setAttribute( 'tabindex', '-1' );
			button.setAttribute( 'aria-selected', 'false' );
			button.removeEventListener( 'focus', this.focusEventHandler.bind( this ) );
		}

		for ( const panel of this.panels ) {
			panel.setAttribute( 'hidden', 'hidden' );
		}
	}

	/**
	 * Handle focus events.
	 *
	 * @param {Event} event
	 */
	focusEventHandler( event ) {
		const {target} = event;

		setTimeout( this.checkTabFocus.bind( this ), this.delay, target );
	}

	/**
	 * Activate a tab.
	 *
	 * @param {DomNode} tab
	 * @param {Boolean} setFocus
	 */
	activateTab ( tab, setFocus ) {
		if( 'tab' !== tab.getAttribute( 'role' ) ) {
			tab = tab.closest( '[role="tab"]' );
		}

		setFocus = setFocus || true;

		this.deactivateTabs();

		tab.removeAttribute( 'tabindex' );

		tab.setAttribute( 'aria-selected', 'true' );

		const controls = tab.getAttribute( 'aria-controls' );

		document.getElementById( controls ).removeAttribute( 'hidden' );

		if ( setFocus ) {
			tab.focus();
		}
	}

	/**
	 * Handle keydown.
	 *
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		const key = event.keyCode;

		switch ( key ) {
				case this.keys.end:
					event.preventDefault();
					this.activateTab( this.buttons[this.buttons.length - 1] );
					break;
				case this.keys.home:
					event.preventDefault();
					this.activateTab( this.buttons[0] );
					break;

				case this.keys.up:
				case this.keys.down:
					this.determineOrientation( event );
					break;
		}
	}

	/**
	 * Handle keyup.
	 *
	 * @param {Event} event
	 */
	handleKeyUp( event ) {
		const key = event.keyCode;

		switch ( key ) {
				case this.keys.left:
				case this.keys.right:
					this.determineOrientation( event );
					break;
		}
	}

	/**
	 * Check which orientation we're in.
	 *
	 * @param {Event} event
	 */
	determineOrientation( event ) {
		const key = event.keyCode;
		const vertical = 'vertical' == this.tablist.getAttribute( 'aria-orientation' );
		let proceed = false;

		if ( vertical ) {
			if ( key === this.keys.up || key === this.keys.down ) {
				event.preventDefault();
				proceed = true;
			}
		}
		else {
			if ( key === this.keys.left || key === this.keys.right ) {
				proceed = true;
			}
		}

		if ( proceed ) {
			this.switchTabOnArrowPress( event );
		}
	}

	/**
	 * Switch tab when arrow key is pressed.
	 *
	 * @param {Event} event
	 */
	switchTabOnArrowPress( event ) {
		const pressed = event.keyCode;

		for ( const button of this.buttons ) {
			button.addEventListener( 'focus', this.focusEventHandler.bind( this ) );
		}

		if ( this.direction[pressed] ) {
			const {target} = event;
			if ( target.index !== undefined ) {
				if ( this.buttons[target.index + this.direction[pressed]] ) {
					this.buttons[target.index + this.direction[pressed]].focus();
				}
				else if ( pressed === this.keys.left || pressed === this.keys.up ) {
					this.focusLastTab();
				}
				else if ( pressed === this.keys.right || pressed == this.keys.down ) {
					this.focusFirstTab();
				}
			}
		}
	}

	/**
	 * Focus the first tab.
	 */
	focusFirstTab() {
		this.buttons[0].focus();
	}

	/**
	 * Focus the last tab.
	 */
	focusLastTab() {
		this.buttons[this.buttons.length - 1].focus();
	}

	/**
	 * Determine if there should be a delay.
	 */
	determineDelay() {
		const hasDelay = this.tablist.hasAttribute( 'data-delay' );
		let delay = 0;

		if ( hasDelay ) {
			const delayValue = this.tablist.getAttribute( 'data-delay' );
			if ( delayValue ) {
				delay = delayValue;
			}
			else {
				delay = 300;
			}
		}

		return delay;
	}

	/**
	 *
	 * @param {DomNode} target
	 */
	checkTabFocus( target ) {
		const focused = document.activeElement;

		if ( target === focused ) {
			this.activateTab( target, false );
		}
	}
}

export default Tabs;
