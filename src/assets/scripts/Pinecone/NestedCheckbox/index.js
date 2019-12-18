/**
 * Mixed checkbox class.
 */
class NestedCheckbox {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {DomNode} input
	 * @param {NodeList} subInputs
	 * @param {Object} options
	 */
	constructor( container, input, subInputs, options ) {
		this.container = container;
		this.input = input;
		this.inputId = this.input.getAttribute( 'id' );
		this.customCheckbox = false;
		this.value = this.input.getAttribute( 'value' );
		this.label = this.input.nextElementSibling;
		this.subInputs = subInputs;
		this.subGroup = this.container.querySelector( '.input-group__descendant' );
		this.config = {
			...{
				disclosureButtonSelector: '.disclosure-button'
			},
			...options
		};

		this.initDisclosure();
		this.initCustomCheckbox();

		this.handleChange = this.handleChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
		this.handleKeydown = this.handleKeydown.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize a mixed checkbox.
	 */
	initDisclosure() {
		const disclosureLabel = this.label.nextElementSibling;
		const disclosureLabelId = disclosureLabel.getAttribute( 'id' );
		const disclosureBtn = document.createElement( 'button' );
		disclosureBtn.classList.add( 'disclosure-button' );
		disclosureBtn.setAttribute( 'type', 'button' );
		disclosureBtn.setAttribute( 'aria-expanded', false );
		disclosureBtn.setAttribute( 'aria-labelledby', disclosureLabelId );
		disclosureBtn.innerHTML = `
			<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="icon icon-chevron-down" aria-hidden="true" focusable="false"><path id="chevron-down" d="m10 15a1 1 0 0 1 -.71-.29l-5-5a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5a1 1 0 0 1 -.71.29z" fill="currentColor"></path></svg>
		`;
		this.input.parentNode.insertBefore( disclosureBtn, this.subGroup );
	}

	/**
	 * Initialize a mixed checkbox.
	 */
	initCustomCheckbox() {
		const status = this.getCustomState();
		const supplementaryLabel = this.container.querySelector( 'span:not([id])' );
		supplementaryLabel.parentNode.removeChild( supplementaryLabel );
		const customCheckbox = document.createElement( 'div' );
		customCheckbox.classList.add( 'checkbox' );
		customCheckbox.setAttribute( 'role', 'checkbox' );
		customCheckbox.setAttribute( 'aria-checked', status );
		customCheckbox.setAttribute( 'tabindex', 0 );
		customCheckbox.textContent = this.label.innerText;
		customCheckbox.appendChild( supplementaryLabel );
		supplementaryLabel.classList.add( 'screen-reader-text' );
		supplementaryLabel.hidden = false;
		this.input.parentNode.insertBefore( customCheckbox, this.input );
		this.input.setAttribute( 'type', 'hidden' );
		this.input.setAttribute( 'value', status ? this.value : '' );
		this.label.hidden = true;
		this.customCheckbox = customCheckbox;
	}

	/**
	 * Get custom status for the top-level checkbox.
	 */
	getCustomState() {
		return false;
	}

	/**
	 * Handler for mixed checkboxes.
	 *
	 * @param {DomNode} ctrl
	 */
	toggleMixedCheckbox( ctrl ) {
		const state = 'true' === ctrl.getAttribute( 'aria-checked' ) || false;
		ctrl.setAttribute( 'aria-checked', !state );
		this.input.setAttribute( 'value', !state ? this.value : '' );
		Array.prototype.forEach.call( this.subInputs, checkbox => {
			checkbox.checked = !state;
		} );
		ctrl.focus();
	}

	/**
	 * Handle change event.
	 *
	 * @param {Event} event
	 */
	handleChange( event ) {
		if ( ! this.subGroup.contains( event.target ) ) return;

		const checkedSubInputs = this.subGroup.querySelectorAll( '[type="checkbox"]:checked' );

		let state = false;

		if ( event.target.checked ) {
			if ( checkedSubInputs.length === this.subInputs.length ) {
				state = true;
			} else {
				state = 'mixed';
			}
		} else {
			if ( 0 < checkedSubInputs.length ) {
				state = 'mixed';
			} else {
				state = false;
			}
		}

		this.customCheckbox.setAttribute( 'aria-checked', state );
		this.input.setAttribute( 'value', ( true === state ) ? this.value : '' );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		if ( ! event.target.closest( this.config.disclosureButtonSelector ) && 'checkbox' !== event.target.getAttribute( 'role' ) ) return;
		if ( event.target.closest( this.config.disclosureButtonSelector ) ) {
			const ctrl = event.target.closest( this.config.disclosureButtonSelector );
			const expanded = 'true' === ctrl.getAttribute( 'aria-expanded' ) || false;
			ctrl.setAttribute( 'aria-expanded', !expanded );
		}
		if ( 'checkbox' === event.target.getAttribute( 'role' ) ) {
			this.toggleMixedCheckbox( event.target );
		}
	}

	/**
	 * Handle keydown event.
	 *
	 * @param {Event} event
	 */
	handleKeydown( event ) {
		if ( 'checkbox' !== event.target.getAttribute( 'role' ) ) {
			return;
		}

		let flag = false;

		if ( 32 === event.keyCode ) {
			this.toggleMixedCheckbox( event.target );
			flag = true;
		}

		if ( flag ) {
			event.stopPropagation();
			event.preventDefault();
		}
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		this.container.addEventListener( 'change', this.handleChange, false );
		this.container.addEventListener( 'click', this.handleClick, false );
		this.container.addEventListener( 'keydown', this.handleKeydown, false );
	}
}

export default NestedCheckbox;
