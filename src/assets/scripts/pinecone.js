// Props Chris Coyier (https://css-tricks.com/inline-svg-cached/)

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

// Props Heydon Pickering (https://inclusive-components.design/cards/)

const cards = document.querySelectorAll( '.card' );

Array.prototype.forEach.call( cards, card => {
	const link = card.querySelector( 'h2 a' );
	let down, up;
	card.style.cursor = 'pointer';
	card.onmousedown = () => down = +new Date();
	card.onmouseup = () => {
		up = +new Date();
		if ( 200 > ( up - down ) ) {
			link.click();
		}
	};
} );
