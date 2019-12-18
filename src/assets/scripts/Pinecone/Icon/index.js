/**
 * Icon Handler.
 *
 * Props Chris Coyier (https://css-tricks.com/inline-svg-cached/)
 */
class Icon {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} icon
	 * @param {Object} options
	 */
	constructor( icon, options ) {
		this.icon = icon;
		this.config = {
			...{
				// TODO
			},
			...options
		};

		this.inlineSvg( icon );
	}

	/**
	 *
	 * @param {DomNode} icon
	 */
	inlineSvg( icon ) {
		if ( !icon.querySelector( 'use' ) ) return false;
		const classNames = icon.classList;
		const ariaHidden = icon.getAttribute( 'aria-hidden' );
		const focusable = icon.getAttribute( 'focusable' );
		const viewBox = icon.getAttribute( 'viewBox' );
		const url = icon.querySelector( 'use' ).getAttribute( 'href' );
		fetch( url )
			.then( response => response.text() )
			.then( data => {
				const newEl = document.createElement( 'span' );
				newEl.innerHTML = data;
				newEl.firstChild.setAttribute( 'class', classNames );
				if ( ariaHidden )
					newEl.firstChild.setAttribute( 'aria-hidden', true );
				if ( focusable )
					newEl.firstChild.setAttribute( 'focusable', true );
				if ( viewBox )
					newEl.firstChild.setAttribute( 'viewBox', viewBox );
				icon.parentNode.replaceChild( newEl, icon );

				const parent = newEl.parentNode;
				while ( newEl.firstChild ) parent.insertBefore( newEl.firstChild, newEl );
				parent.removeChild( newEl );
			} );
	}
}

export default Icon;
