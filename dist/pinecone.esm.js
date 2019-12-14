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
				// TODO: Defaults?
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
		this.handleDropdownFocusOut = this.handleDropdownFocusOut.bind( this );
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
		// TODO: Closest polyfill

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
	handleDropdownFocusOut( event ) {
		const openDropDown = this.menu.querySelector( '[aria-expanded="true"]' );
		if ( ! openDropDown ) return false;

		const el = event.target;

		const subMenu = el.closest( this.config.childMenuSelector );
		// Last focus was on an item in a submenu; maybe we need to close it
		if ( subMenu ) {
			const items = subMenu.querySelectorAll( 'li' );
			const itemCount = items.length;
			const item = el.parentNode;
			console.log( Array.prototype.indexOf.call( items, item ) );
			// const parentMenu = subMenu.closest( this.config.parentMenuSelector );
			// Focus is still within the parent menu; we should leave it open.
			// if ( document.activeElement.closest( this.config.parentMenuSelector ) === parentMenu ) return false;
			// Last focus was on last item in the submenu.
			// if ( ! el.parentNode.nextElementSibling ) {
			// openDropDown.setAttribute( 'aria-expanded', false );
			// }
			// openDropDown.setAttribute( 'aria-expanded', false );
		}
		// openDropDown.setAttribute( 'aria-expanded', false );
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleToggle, false );
		document.addEventListener( 'click', this.handleDropdown, false );
		document.addEventListener( 'focusout', this.handleDropdownFocusOut, false );
	}
}

/*
export function menu() {
	const menuToggle = document.querySelector( '.menu-toggle' );
	const primaryMenu = document.querySelector( '.menu' );

	if ( menuToggle && primaryMenu ) {
		const topLevelMenuItems = document.querySelectorAll( '.menu > li > *' );
		const parentMenus = primaryMenu.querySelectorAll( '.menu__submenu-wrapper' );

		menuToggle.onclick = () => {
			const currentState = menuToggle.getAttribute( 'aria-expanded' );
			const newState = ( 'true' !== currentState );
			menuToggle.setAttribute( 'aria-expanded', newState );
		};

		Array.prototype.forEach.call( parentMenus, parentMenu => {
			const linkEl = parentMenu.querySelector( 'a' );
			const menuButton = document.createElement( 'button' );
			menuButton.className = 'menu__item';
			menuButton.setAttribute( 'aria-expanded', false );
			menuButton.innerHTML = `${linkEl.innerHTML}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon icon-chevron-down"><path d="m15 9-5 5-5-5" fill="none" stroke="#203131" stroke-linecap="round" stroke-linejoin="round" class="stroke" stroke-width="2"></path></svg>`;
			parentMenu.insertBefore( menuButton, parentMenu.firstChild );
			parentMenu.removeChild( linkEl );
			menuButton.addEventListener( 'click', () => {
				const currentState = menuButton.getAttribute( 'aria-expanded' );
				const newState = ( 'true' !== currentState );
				menuButton.setAttribute( 'aria-expanded', newState );
			} );
			document.addEventListener( 'click', event => {
				if ( ! parentMenu.contains( event.target ) ) {
					menuButton.setAttribute( 'aria-expanded', false );
				}
			} );
			document.onkeydown = function( evt ) {
				evt = evt || window.event;
				let isEscape = false;
				if ( 'key' in evt ) {
					isEscape = 'Escape' == evt.key || 'Esc' == evt.key;
				} else {
					isEscape = 27 == evt.keyCode;
				}
				if ( isEscape ) {
					menuButton.setAttribute( 'aria-expanded', false );
				}
			};
		} );

		Array.prototype.forEach.call( topLevelMenuItems, topLevelMenuItem => {
			topLevelMenuItem.addEventListener( 'focus', () => {
				const openDropDown = primaryMenu.querySelector( '[aria-expanded="true"]' );
				if ( ! openDropDown ) {
					return;
				}
				openDropDown.setAttribute( 'aria-expanded', false );
			} );
		} );
	}
}
*/

var index = { Accordion, Menu };

export default index;
