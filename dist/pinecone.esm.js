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
 * Filter List Handler.
 */
class FilterList {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, showCtrl, hideCtrl, options ) {
		this.container = container;
		this.showCtrl = showCtrl;
		this.hideCtrl = hideCtrl;
		this.config = {
			...{
				showCtrlSelector: '#show-filters',
				hideCtrlSelector: '#hide-filters'
			},
			...options
		};

		this.handleOverlay = this.handleOverlay.bind( this );
		this.handleResize = this.handleResize.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle overlay.
	 */
	handleOverlay( event ) {
		if ( ! event.target.closest( this.config.showCtrlSelector ) && ! event.target.closest( this.config.hideCtrlSelector ) ) return false;

		const elems = document.querySelectorAll( 'body > *' );

		if ( event.target.closest( this.config.showCtrlSelector ) ) {
			document.body.classList.add( 'has-modal' );
			Array.prototype.forEach.call( elems, elem => {
				elem.setAttribute( 'inert', 'inert' );
			} );
			this.container.parentNode.removeChild( this.container );
			document.body.insertBefore( this.container, document.body.firstChild );
			const heading = this.container.querySelector( 'h2' );
			const accordion = this.container.querySelector( '.accordion' );
			heading.classList.remove( 'screen-reader-text' );
			accordion.style.display = 'block';
			this.container.classList.add( 'filter-sort__filters--expanded' );
			heading.focus();
		} else {
			Array.prototype.forEach.call( elems, elem => {
				elem.removeAttribute( 'inert' );
			} );
			this.container.classList.remove( 'filter-sort__filters--expanded' );
			this.container.parentNode.removeChild( this.container );
			this.showCtrl.parentNode.insertBefore( this.container, this.showCtrl.nextSibling );
			document.body.classList.remove( 'has-modal' );
			this.showCtrl.focus();
		}
	}

	/**
	 * Handle window resize events.
	 */
	handleResize() {
		let timeout;
		if ( this.container.classList.contains( 'filter-sort__filters--expanded' ) ) {
			if ( !timeout ) {
				timeout = setTimeout( this.removeOverlay( timeout ), 66 );
			}
		}
	}

	/**
	 * Resize function.
	 */
	removeOverlay( timeout ) {

		const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

		if ( 1279 < viewportWidth ) {
			const elems = document.querySelectorAll( 'body > *' );
			Array.prototype.forEach.call( elems, elem => {
				elem.removeAttribute( 'inert' );
			} );
			this.container.classList.remove( 'filter-sort__filters--expanded' );
			this.container.parentNode.removeChild( this.container );
			this.showCtrl.parentNode.insertBefore( this.container, this.showCtrl.nextSibling );
			document.body.classList.remove( 'has-modal' );
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleOverlay, false );
		window.addEventListener( 'resize', this.handleResize, false );
	}
}

/**
 * Icon Handler.
 *
 * Props Chris Coyier (https://css-tricks.com/inline-svg-cached/)
 */
class Icon {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} icon
	 * @param {Object} options
	 */
	constructor( icon, options ) {
		this.icon = icon;
		this.config = {
			...{
				// TODO
			},
			...options
		};

		this.inlineSvg( icon );
	}

	/**
	 *
	 * @param {DomNode} icon
	 */
	inlineSvg( icon ) {
		if ( !icon.querySelector( 'use' ) ) return false;
		const classNames = icon.classList;
		const ariaHidden = icon.getAttribute( 'aria-hidden' );
		const focusable = icon.getAttribute( 'focusable' );
		const viewBox = icon.getAttribute( 'viewBox' );
		const url = icon.querySelector( 'use' ).getAttribute( 'href' );
		fetch( url )
			.then( response => response.text() )
			.then( data => {
				const newEl = document.createElement( 'span' );
				newEl.innerHTML = data;
				newEl.firstChild.setAttribute( 'class', classNames );
				if ( ariaHidden )
					newEl.firstChild.setAttribute( 'aria-hidden', true );
				if ( focusable )
					newEl.firstChild.setAttribute( 'focusable', true );
				if ( viewBox )
					newEl.firstChild.setAttribute( 'viewBox', viewBox );
				icon.parentNode.replaceChild( newEl, icon );

				const parent = newEl.parentNode;
				while ( newEl.firstChild ) parent.insertBefore( newEl.firstChild, newEl );
				parent.removeChild( newEl );
			} );
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

var index = { Accordion, Card, FilterList, Icon, Menu };

export default index;
