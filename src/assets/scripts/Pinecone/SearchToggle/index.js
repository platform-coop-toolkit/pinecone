/**
 * Search toggle class.
 */
class SearchToggle {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} btn
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( btn, container, options ) {
		this.btn = btn;
		this.container = container;
		this.config = {
			...{},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.handleBlur = this.handleBlur.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle click.
	 */
	handleClick() {
		const expanded = 'true' === this.btn.getAttribute( 'aria-expanded' ) || false;
		this.btn.setAttribute( 'aria-expanded', !expanded );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleBlur( event ) {
		if ( ! event.relatedTarget ) return;
		const expanded = 'true' === this.btn.getAttribute( 'aria-expanded' ) || false;
		if ( expanded && ! event.relatedTarget.closest( '.search-form' ) && event.relatedTarget !== this.btn ) {
			this.btn.setAttribute( 'aria-expanded', false );
		}
	}

	/**
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		const expanded = 'true' === this.btn.getAttribute( 'aria-expanded' ) || false;
		if ( ! expanded ) return false;

		if ( 27 === event.keyCode ) {
			this.btn.setAttribute( 'aria-expanded', false );
			this.btn.focus();
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		this.btn.addEventListener( 'click', this.handleClick, false );
		Array.prototype.forEach.call( this.container.querySelectorAll( 'input, button' ), el => {
			el.addEventListener( 'blur', this.handleBlur, false );
		} );
		document.addEventListener( 'keydown', this.handleKeyDown, false );
	}
}

export default SearchToggle;
