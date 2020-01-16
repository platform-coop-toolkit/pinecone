/**
 * DisclosureButton class.
 */
class DisclosureButton {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} label
	 * @param {Object} options
	 */
	constructor( label, options ) {
		this.label = label;
		this.container = this.label.parentNode;
		this.config = {
			...{
				controlSelector: '.disclosure-button',
				buttonVariant: false,
				visuallyHiddenLabel: false,
			},
			...options
		};
		this.initDisclosure();
		this.handleClick = this.handleClick.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize content within the disclosure.
	 */
	initDisclosure() {
		const ctrl = document.createElement( 'button' );
		const className = ( this.config.buttonVariant ) ?
			`button ${this.config.buttonVariant} disclosure-button` :
			'button disclosure-button';
		const label = this.config.visuallyHiddenLabel ?
			`<span class="screen-reader-text">${this.label.textContent}</span>` :
			this.label.textContent;
		ctrl.setAttribute( 'class', className );
		ctrl.setAttribute( 'aria-expanded', 'false' );
		ctrl.setAttribute( 'type', 'button' );
		ctrl.innerHTML = `
			${label}
			<svg class="icon icon--chevron-down" viewBox="0 0 20 20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path id="chevron-down" d="m10 15a1 1 0 0 1 -.71-.29l-5-5a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5a1 1 0 0 1 -.71.29z" fill="currentColor"/></svg>
		`;
		this.container.insertBefore( ctrl, this.label.nextElementSibling );
		this.container.removeChild( this.label );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		if ( ! event.target.closest( this.config.controlSelector ) ) return;
		const ctrl = event.target.closest( this.config.controlSelector );
		const expanded = 'true' === ctrl.getAttribute( 'aria-expanded' ) || false;
		ctrl.setAttribute( 'aria-expanded', !expanded );
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		this.container.addEventListener( 'click', this.handleClick, false );
	}
}

export default DisclosureButton;
