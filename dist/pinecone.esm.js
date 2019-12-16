/**
 * Accordion class.
 */
class Accordion {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, options ) {
		this.container = container;
		this.config = {
			...{
				headingSelector: '.accordion__heading',
				paneSelector: '.accordion__pane',
				controlSelector: '.accordion__control'
			},
			...options
		};
		this.panes = this.container.querySelectorAll( this.config.paneSelector );
		Array.prototype.forEach.call( this.panes, pane => {
			this.initPane( pane );
		} );
		this.handleClicks = this.handleClicks.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize a pane within the accordion.
	 *
	 * @param {DomNode} pane
	 */
	initPane( pane ) {
		const heading = pane.querySelector( this.config.headingSelector );
		const ctrl = document.createElement( 'button' );
		ctrl.setAttribute( 'class', 'accordion__control' );
		ctrl.setAttribute( 'aria-expanded', 'false' );
		ctrl.setAttribute( 'type', 'button' );
		ctrl.innerHTML = `
			${heading.textContent}
			<svg class="icon icon--chevron-down" viewBox="0 0 20 20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path id="chevron-down" d="m10 15a1 1 0 0 1 -.71-.29l-5-5a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5a1 1 0 0 1 -.71.29z" fill="currentColor"/></svg>
		`;
		heading.parentNode.insertBefore( ctrl, heading.nextElementSibling );
		heading.parentNode.removeChild( heading );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleClicks( event ) {
		if ( ! event.target.closest( this.config.controlSelector ) ) return;

		const ctrl = event.target.closest( this.config.controlSelector );
		const expanded = 'true' === ctrl.getAttribute( 'aria-expanded' ) || false;
		Array.prototype.forEach.call( this.container.querySelectorAll( '.accordion__control' ), el => {
			el.setAttribute( 'aria-expanded', false );
		} );
		ctrl.setAttribute( 'aria-expanded', !expanded );
		if ( expanded ) {
			ctrl.parentNode.classList.remove( 'accordion__pane--expanded' );
		} else {
			ctrl.parentNode.classList.add( 'accordion__pane--expanded' );
		}
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		this.container.addEventListener( 'click', this.handleClicks, false );
	}
}

/**
 * Card class.
 */
class Card {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} card
	 * @param {Object} options
	 */
	constructor( card, options ) {
		this.card = card;
		this.config = {
			...{
				cardLinkSelector: 'h2 a'
			},
			...options
		};

		this.initCard( card );
	}

	/**
	 * Initialize card
	 *
	 * @param {DomNode} card
	 */
	initCard( card ) {
		const link = card.querySelector( this.config.cardLinkSelector );
		let down, up;
		card.style.cursor = 'pointer';
		card.onmousedown = () => down = +new Date();
		card.onmouseup = () => {
			up = +new Date();
			if ( 200 > ( up - down ) ) {
				link.click();
			}
		};
	}
}

/**
 * Menu class.
 */
class Menu {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} menu
	 * @param {DomNode} toggle
	 * @param {Object} options
	 */
	constructor( menu, toggle, options ) {
		this.menu = menu;
		this.toggle = toggle;
		this.config = {
			...{
				menuToggleSelector: '.menu-toggle',
				dropdownButtonSelector: '.menu__item',
				parentMenuSelector: '.menu__submenu-wrapper',
				childMenuSelector: '.menu__submenu'
			},
			...options
		};


		this.parents = this.menu.querySelectorAll( this.config.parentMenuSelector );
		Array.prototype.forEach.call( this.parents, parent => {
			this.initDropdown( parent );
		} );

		this.handleToggle = this.handleToggle.bind( this );
		this.handleDropdown = this.handleDropdown.bind( this );
		this.handleDropdownFocus = this.handleDropdownFocus.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize dropdown menus
	 *
	 * @param {DomNode} parent
	 */
	initDropdown( parent ) {
		const link = parent.querySelector( 'a' );
		const btn = document.createElement( 'button' );
		btn.className = 'menu__item';
		btn.setAttribute( 'aria-expanded', false );
		btn.innerHTML = `
			${link.innerHTML}
			<svg class="icon icon--chevron-down" viewBox="0 0 20 20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path id="chevron-down" d="m10 15a1 1 0 0 1 -.71-.29l-5-5a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5a1 1 0 0 1 -.71.29z" fill="currentColor"/></svg>
		`;
		parent.insertBefore( btn, parent.firstChild );
		parent.removeChild( link );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleToggle( event ) {
		if ( ! event.target.closest( this.config.menuToggleSelector ) ) return;

		const btn = event.target.closest( this.config.menuToggleSelector );
		const expanded = 'true' === btn.getAttribute( 'aria-expanded' ) || false;
		btn.setAttribute( 'aria-expanded', !expanded );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleDropdown( event ) {
		if ( ! event.target.closest( this.config.dropdownButtonSelector ) ) {
			const openDropDown = this.menu.querySelector( '[aria-expanded="true"]' );
			if ( openDropDown ) {
				openDropDown.setAttribute( 'aria-expanded', false );
			}
		} else {
			const btn = event.target.closest( this.config.dropdownButtonSelector );
			const expanded = 'true' === btn.getAttribute( 'aria-expanded' ) || false;
			btn.setAttribute( 'aria-expanded', !expanded );
		}
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleDropdownFocus( event ) {
		const openDropDown = this.menu.querySelector( '[aria-expanded="true"]' );
		if ( ! openDropDown ) return false;

		const openDropDownParent = openDropDown.closest( this.config.parentMenuSelector );

		// Focus is not in the parent menu
		if ( ! openDropDownParent.contains( event.target ) ) {
			openDropDown.setAttribute( 'aria-expanded', false );
		}
	}

	/**
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		const openDropDown = this.menu.querySelector( '[aria-expanded="true"]' );
		if ( ! openDropDown ) return false;

		if ( 27 === event.keyCode ) {
			openDropDown.setAttribute( 'aria-expanded', false );
		}
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleToggle, false );
		document.addEventListener( 'click', this.handleDropdown, false );
		document.addEventListener( 'focusin', this.handleDropdownFocus, false );
		document.addEventListener( 'keydown', this.handleKeyDown, false );
	}
}

var index = { Accordion, Card, Menu };

export default index;
