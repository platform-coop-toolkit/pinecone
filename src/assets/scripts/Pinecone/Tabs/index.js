/**
 * Tabs class.
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

		this.keyCode = Object.freeze( {
			'LEFT': 37,
			'UP': 38,
			'RIGHT': 39,
			'DOWN': 40
		} );

		this.config = {
			...{
				groupSelector: '.tabs'
			},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.setSelectedToPreviousItem = this.setSelectedToPreviousItem.bind( this );
		this.setSelectedToNextItem = this.setSelectedToNextItem.bind( this );
		this.initButtons = this.initButtons.bind( this );
		this.initPanels = this.initPanels.bind( this );

		this.initButtons();
		this.initPanels();
		this.addEventListeners();
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
		const checkedItem = this.tablist.querySelector( '[aria-selected="true"]' );

		if ( 'false' === button.getAttribute( 'aria-selected' ) && checkedItem ) {
			checkedItem.setAttribute( 'aria-selected', false );
			button.setAttribute( 'aria-selected', true );
		}
	}

	/**
	 * Handle keydown.
	 *
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		if ( ! document.activeElement.closest( this.config.groupSelector ) ) return;

		switch ( event.keyCode ) {
				case this.keyCode.UP:
					this.setSelectedToPreviousItem( document.activeElement );
					break;

				case this.keyCode.DOWN:
					this.setSelectedToNextItem( document.activeElement );
					break;

				case this.keyCode.LEFT:
					this.setSelectedToPreviousItem( document.activeElement );
					break;

				case this.keyCode.RIGHT:
					this.setSelectedToNextItem( document.activeElement );
					break;

				default:
					break;
		}
	}

	/**
	 * Move checked state to previous item.
	 */
	setSelectedToPreviousItem( ) {
		let previousItem = document.activeElement.previousElementSibling;
		if ( !previousItem ) {
			previousItem = this.buttons[this.buttons.length - 1];
		}
		const checkedItem = this.tablist.querySelector( '[aria-selected="true"]' );

		checkedItem.setAttribute( 'aria-selected', false );
		previousItem.setAttribute( 'aria-selected', true );
		previousItem.focus();
	}

	/**
	 * Move checked state to next item.
	 */
	setSelectedToNextItem() {
		let nextItem = document.activeElement.nextElementSibling;
		if ( !nextItem ) {
			const index = 0;
			nextItem = this.buttons[index];
		}
		const checkedItem = this.tablist.querySelector( '[aria-selected="true"]' );
		checkedItem.setAttribute( 'aria-selected', false );
		nextItem.setAttribute( 'aria-selected', true );
		nextItem.focus();
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'keydown', this.handleKeyDown );
	}
}

export default Tabs;
