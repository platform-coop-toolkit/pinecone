/* global Pinecone */

const menu = document.querySelector( '.menu' );
const menuToggle = document.querySelector( '.menu-toggle' );

if ( menu && menuToggle ) {
	new Pinecone.Menu( menu, menuToggle );
}

const accordions = document.querySelectorAll( '.accordion' );

if ( accordions ) {
	Array.prototype.forEach.call( accordions, accordion => {
		new Pinecone.Accordion( accordion );
	} );
}
