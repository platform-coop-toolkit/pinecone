/**
 * Dialog Handler.
 */

/**
 * Dialog class.
 */
class Dialog {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} btn
	 * @param {Object} options
	 */
	constructor( btn, options ) {
		this.btn = btn;
		this.config = {
			...{
				title: 'Confirm action',
				question: 'Do you want to do this?',
				dismiss: 'No',
				confirm: 'Yes',
				inputLabel: false,
				inputDescription: false,
				input: false,
				callback:
					/**
					 * Callback for when one was not provided.
					 */
					( input ) => {
						if ( input ) {
							console.log( `Responded with "${input}".` ); // eslint-disable-line
						} else {
							console.error( 'Callback not provided.' ); // eslint-disable-line
						}
					}
			},
			...options
		};

		this.invokeDialog = this.invokeDialog.bind( this );
		this.handleClick = this.handleClick.bind( this );
		this.addEventListeners();
	}

	/**
	 *
	 *
	 */
	handleClick() {
		this.invokeDialog( this.config.callback );
	}

	/**
	 * Invoke dialog.
	 *
	 * @param {Function} callback
	 */
	invokeDialog( callback ) {
		const elems = document.querySelectorAll( 'body > *' );
		Array.prototype.forEach.call( elems, ( elem ) => {
			elem.setAttribute( 'inert', 'inert' );
		} );

		const unique = +new Date();

		const dialog = document.createElement( 'div' );
		dialog.setAttribute( 'role', 'dialog' );
		dialog.setAttribute( 'aria-labelledby', `q-${unique}` );
		dialog.setAttribute( 'aria-describedby', `q-${unique + 1}` );
		let innerHtml = `<h2 id="q-${unique}">${this.config.title}</h2>`;
		if ( this.config.question ) {
			innerHtml += `<p id="q-${unique + 1}">${this.config.question}</p>`;
		}
		if ( this.config.input && this.config.inputLabel ) {
			innerHtml += '<div class="input-group">';
			innerHtml += `<label for="${this.config.input}">${this.config.inputLabel}</label>`;
			if ( this.config.inputDescription ) {
				innerHtml += `<input id="${this.config.input}" type="text" name="${this.config.input}" aria-describedby="${this.config.input}-description" />`;
				innerHtml += `<p id="${this.config.input}-description" class="input-group__description">${this.config.inputDescription}</p>`;
			} else {
				innerHtml += `<input id="${this.config.input}" type="text" name="${this.config.input}" />`;
			}
			innerHtml += '</div>';
		}
		innerHtml += `
			<div class="buttons">
				<button class="button button--secondary dismiss">${this.config.dismiss}</button>
				<button class="button confirm">${this.config.confirm}</button>
			</div>
		`;
		dialog.innerHTML = innerHtml;
		const overlay = document.createElement( 'div' );
		overlay.setAttribute( 'inert', 'inert' );
		overlay.classList.add( 'overlay' );

		/**
		 * Handle close event.
		 */
		const close = () => {
			Array.prototype.forEach.call( elems, elem => {
				if ( elem !== dialog ) {
					elem.removeAttribute( 'inert' );
				}
			} );
			dialog.parentNode.removeChild( dialog );
			overlay.parentNode.removeChild( overlay );
			trigger.focus();
		};

		const confirm = dialog.querySelector( '.confirm' );
		const dismiss = dialog.querySelector( '.dismiss' );
		const trigger = this.btn;

		document.body.appendChild( overlay );
		document.body.appendChild( dialog );

		if ( this.config.input ) {
			document.getElementById( this.config.input ).focus();
		} else {
			dismiss.focus();
		}

		confirm.onclick = () => {
			const input = ( document.getElementById( this.config.input ) ) ? document.getElementById( this.config.input ).value : false;
			close();
			callback( input );
		};
		dismiss.onclick = () => close();
		dialog.addEventListener( 'keydown', e => {
			if ( 27 == e.keyCode ) {
				e.preventDefault();
				close();
			}
		} );
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		this.btn.addEventListener( 'click', this.handleClick, false );
	}
}

export default Dialog;
