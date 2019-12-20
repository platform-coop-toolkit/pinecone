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


		this.parents = document.querySelectorAll( this.config.parentMenuSelector );
		Array.prototype.forEach.call( this.parents, parent => {
			this.initDropdown( parent );
		} );

		this.handleToggle = this.handleToggle.bind( this );
		this.handleDropdown = this.handleDropdown.bind( this );
		this.handleBlur = this.handleBlur.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize dropdown menus
	 *
	 * @param {DomNode} parent
	 */
	initDropdown( parent ) {
		const link = parent.parentNode.querySelector( `${this.config.parentMenuSelector} > a` );
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

		if ( !expanded ) {
			const firstItem = this.menu.querySelector( 'a, button' );
			firstItem.focus();
		}
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
	handleBlur( event ) {
		if ( ! event.relatedTarget ) return;
		if ( 'true' === this.toggle.getAttribute( 'aria-expanded' ) && ! event.relatedTarget.closest( '.menu' ) && event.relatedTarget !== this.toggle ) {
			this.toggle.setAttribute( 'aria-expanded', false );
		} else {
			const expanded = this.menu.querySelector( '[aria-expanded="true"]' );
			if ( ! expanded ) return;

			const parent = expanded.closest( this.config.parentMenuSelector );
			if ( event.relatedTarget.parentNode.parentNode.parentNode !== parent && event.relatedTarget.parentNode !== parent ){
				expanded.setAttribute( 'aria-expanded', false );
			}
		}
	}

	/**
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		const expanded = this.menu.parentNode.querySelectorAll( '[aria-expanded="true"]' );
		if ( ! expanded ) return false;

		if ( 27 === event.keyCode ) {
			Array.prototype.forEach.call( expanded, el => {
				el.setAttribute( 'aria-expanded', false );
				if ( el == this.toggle ) {
					el.focus();
				}
			} );
		}
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleToggle, false );
		document.addEventListener( 'click', this.handleDropdown, false );
		Array.prototype.forEach.call( this.menu.querySelectorAll( 'a, button' ), el => {
			el.addEventListener( 'blur', this.handleBlur, false );
		} );
		document.addEventListener( 'keydown', this.handleKeyDown, false );
	}
}

export default Menu;
