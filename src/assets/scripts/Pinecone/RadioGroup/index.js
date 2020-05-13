/**
 * Radio Grou class.
 */
class RadioGroup {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, options ) {
		this.radioGroup = container;
		this.keyCode = Object.freeze( {
			'LEFT': 37,
			'UP': 38,
			'RIGHT': 39,
			'DOWN': 40
		} );

		this.config = {
			...{
				groupSelector: '.radio-group'
			},
			...options
		};

		this.handleClick = this.handleClick.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.setCheckedToPreviousItem = this.setCheckedToPreviousItem.bind( this );
		this.setCheckedToNextItem = this.setCheckedToNextItem.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle click.
	 *
	 * @param {Event} event
	 */
	handleClick( event ) {
		if ( ! event.target.closest( this.config.groupSelector ) ) return;
		if ( 'BUTTON' !== event.target.nodeName ) return;

		const checkedItem = this.radioGroup.querySelector( '[aria-checked="true"]' );

		if ( 'false' === event.target.getAttribute( 'aria-checked' ) && checkedItem ) {
			checkedItem.setAttribute( 'aria-checked', false );
			event.target.setAttribute( 'aria-checked', true );
		}
	}

	/**
	 * Handle keydown.
	 *
	 * @param {Event} event
	 */
	handleKeyDown( event ) {
		if ( ! document.activeElement.closest( this.config.groupSelector ) ) return;

		switch ( event.keyCode ) {
				case this.keyCode.UP:
					this.setCheckedToPreviousItem( document.activeElement );
					break;

				case this.keyCode.DOWN:
					this.setCheckedToNextItem( document.activeElement );
					break;

				case this.keyCode.LEFT:
					this.setCheckedToPreviousItem( document.activeElement );
					break;

				case this.keyCode.RIGHT:
					this.setCheckedToNextItem( document.activeElement );
					break;

				default:
					break;
		}
	}

	/**
	 * Move checked state to previous item.
	 */
	setCheckedToPreviousItem( ) {
		let previousItem = document.activeElement.previousElementSibling;
		if ( !previousItem ) {
			const buttons = this.radioGroup.querySelectorAll( 'button' );
			previousItem = buttons[buttons.length - 1];
		}
		const checkedItem = this.radioGroup.querySelector( '[aria-checked="true"]' );

		checkedItem.setAttribute( 'aria-checked', false );
		previousItem.setAttribute( 'aria-checked', true );
		previousItem.focus();
	}

	/**
	 * Move checked state to next item.
	 */
	setCheckedToNextItem() {
		let nextItem = document.activeElement.nextElementSibling;
		if ( !nextItem ) {
			const button = this.radioGroup.querySelector( 'button' );
			nextItem = button;
		}
		const checkedItem = this.radioGroup.querySelector( '[aria-checked="true"]' );
		checkedItem.setAttribute( 'aria-checked', false );
		nextItem.setAttribute( 'aria-checked', true );
		nextItem.focus();
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleClick );
		document.addEventListener( 'keydown', this.handleKeyDown );
	}
}

export default RadioGroup;
