const icons = document.querySelectorAll( 'svg.icon' );

icons.forEach( icon => {
	const iconClasses = icon.classList;
	const url = icon.querySelector( 'use' ).getAttribute( 'xlink:href' );
	fetch( url )
		.then( response => response.text() )
		.then( data => {
			const newEl = document.createElement( 'span' );
			newEl.innerHTML = data;
			newEl.firstChild.setAttribute( 'class', iconClasses );
			icon.parentNode.replaceChild( newEl, icon );

			const parent = newEl.parentNode;
			while ( newEl.firstChild ) parent.insertBefore( newEl.firstChild, newEl );
			parent.removeChild( newEl );
		} );
} );
