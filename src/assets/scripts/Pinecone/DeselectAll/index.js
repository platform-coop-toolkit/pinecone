/**
 * Deselect All button class.
 */
class DeselectAll {
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
	 *
	 * @param {Event} event
	 */
	handleClick() {
		const inputGroup = this.btn.parentNode.querySelector( '.input-group__parent' );
		const checkboxes = inputGroup.querySelectorAll( '[type="checkbox"]' );
		const customCheckboxes = inputGroup.querySelectorAll( '[role="checkbox"]' );
		const hiddenInputs = inputGroup.querySelectorAll( '[type="hidden"]' );
		Array.prototype.forEach.call( checkboxes, checkbox => {
			checkbox.checked = false;
		} );
		if ( 0 < customCheckboxes.length ) {
			Array.prototype.forEach.call( customCheckboxes, customCheckbox => {
				customCheckbox.setAttribute( 'aria-checked', false );
			} );
		}
		if ( 0 < hiddenInputs.length ) {
			Array.prototype.forEach.call( hiddenInputs, hiddenInput => {
				hiddenInput.setAttribute( 'value', '' );
			} );
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		this.btn.addEventListener( 'click', this.handleClick, false );
	}
}

export default DeselectAll;
