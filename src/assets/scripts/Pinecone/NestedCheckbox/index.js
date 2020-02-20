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
		this.inputId = this.input.id;
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

		this.initCustomCheckbox();

		this.handleChange = this.handleChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
		this.handleKeydown = this.handleKeydown.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize a mixed checkbox.
	 */
	initCustomCheckbox() {
		const status = this.getCustomState();
		const supplementaryLabel = this.container.querySelector( 'span.supplementary-label' );
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
		this.input.classList.add( 'screen-reader-text' );
		this.input.setAttribute( 'aria-hidden', 'true' );
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
		this.input.checked = !state;
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
		if ( 'checkbox' !== event.target.getAttribute( 'role' ) ) return;
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
	 * Add event listeners.
	 */
	addEventListeners() {
		this.container.addEventListener( 'change', this.handleChange, false );
		this.container.addEventListener( 'click', this.handleClick, false );
		this.container.addEventListener( 'keydown', this.handleKeydown, false );
	}
}

export default NestedCheckbox;
