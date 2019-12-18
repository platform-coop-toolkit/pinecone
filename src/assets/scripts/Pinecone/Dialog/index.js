import 'wicg-inert';

/**
 * Dialog Handler.
 */
export function dialogs() {
	const invokeButton = document.getElementById( 'invoke-dialog' );
	if ( null === invokeButton.offsetParent ) {
		return;
	}
	const elems = document.querySelectorAll( 'body > *' );
	const dialogSource = invokeButton.nextElementSibling;
	const dialogTitle = dialogSource.firstElementChild;
	const dialogContent = dialogTitle.nextElementSibling;

	invokeButton.onclick = () => {
		Array.prototype.forEach.call( elems, elem => {
			elem.setAttribute( 'inert', 'inert' );
		} );
		const unique = +new Date();
		const dialog = document.createElement( 'article' );
		dialog.classList.add( 'has-dark-mint-500-background-color' );
		dialog.setAttribute( 'role', 'dialog' );
		dialog.setAttribute( 'aria-labelledby', `h-${unique}` );
		dialog.innerHTML = `
			<button id="dialog__close"><span class="button__label">Close</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon icon-close"><g fill="none" stroke="#203131" stroke-linecap="round" stroke-miterlimit="10" class="stroke" stroke-width="2"><path d="m5 15 10-10"></path><path d="m15 15-10-10"></path></g></svg></button>
			<h1 class="dialog__header" id="h-${unique}">${ dialogTitle.innerHTML }</h1>
			<div class="dialog__content ${ dialogContent.classList }">${ dialogContent.innerHTML }</div>
		`;
		document.body.appendChild( dialog );

		/**
		 * Close the dialog.
		 */
		const close = () => {
			Array.prototype.forEach.call( elems, elem => {
				if ( elem !== dialog ) {
					elem.removeAttribute( 'inert' );
				}
			} );
			dialog.parentNode.removeChild( dialog );
			invokeButton.focus();
		};

		const closeButton = document.getElementById( 'dialog__close' );
		closeButton.onclick = () => {
			close();
		};

		document.onkeydown = function( evt ) {
			evt = evt || window.event;
			let isEscape = false;
			if ( 'key' in evt ) {
				isEscape = 'Escape' == evt.key || 'Esc' == evt.key;
			} else {
				isEscape = 27 == evt.keyCode;
			}
			if ( isEscape ) {
				close();
			}
		};
	};
}
