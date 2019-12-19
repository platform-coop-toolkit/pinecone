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
		this.config = {
			...{},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
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
	 * Add event listeners.
	 */
	addEventListeners() {
		this.btn.addEventListener( 'click', this.handleClick, false );
	}
}

export default MenuButton;
