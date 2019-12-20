import Popper from '../../../../../node_modules/popper.js/dist/esm/popper';

/**
 * Menu Button class.
 */
class MenuButton {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} btn
	 * @param {Object} options
	 */
	constructor( btn, options ) {
		this.btn = btn;
		this.menu = this.btn.parentNode.querySelector( '.menu-button__menu' );
		this.links = btn.parentNode.querySelectorAll( 'a' );
		this.config = {
			...{
				placement: 'auto',
				preventOverflow: true,
				boundariesElement: document.querySelector( 'main' )
			},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.handleBlur = this.handleBlur.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle click.
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		if ( event.target.closest( '.menu-button button' ) ) {
			const expanded = 'true' === this.btn.getAttribute( 'aria-expanded' ) || false;
			this.btn.setAttribute( 'aria-expanded', !expanded );
			if ( false === expanded ) {
				new Popper( this.btn, this.menu, {
					placement: this.config.placement,
					preventOverflow:
						( true === this.config.preventOverflow ) ?
							{
								enabled: true,
								boundariesElement: this.config.boundariesElement
							} :
							{
								enabled: false
							}
				} );
			}
		} else {
			this.btn.setAttribute( 'aria-expanded', false );

		}
	}

	/**
	 * Handle blur.
	 *
	 * @param {Event} event
	 */
	handleBlur( event ) {
		if ( event.target === this.links[this.links.length - 1] && event.relatedTarget && 'LI' !== event.relatedTarget.parentNode.nodeName ) {
			this.btn.setAttribute( 'aria-expanded', false );
		}
	}

	/**
	 * Handle keydown.
	 *
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		if ( 27 === event.keyCode ) {
			const restoreFocus = document.activeElement.parentNode.parentNode.parentNode === this.btn.parentNode;
			this.btn.setAttribute( 'aria-expanded', false );
			if ( restoreFocus ) this.btn.focus();
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleClick, false );
		document.addEventListener( 'keydown', this.handleKeyDown, false );
		Array.prototype.forEach.call( this.links, link => {
			link.addEventListener( 'blur', this.handleBlur, false );
		} );
	}
}

export default MenuButton;
