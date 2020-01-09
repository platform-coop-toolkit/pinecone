/**
 * Notification class.
 */
class Notification {
	/**
	 * Constructor.
	 *
	 * @param {Object} options
	 */
	constructor( options ) {
		this.config = {
			...{},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle click.
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		if ( event.target.closest( '.notification button' ) ) {
			const notification = event.target.closest( '.notification' );
			notification.parentNode.removeChild( notification );
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleClick, false );
	}
}

export default Notification;
