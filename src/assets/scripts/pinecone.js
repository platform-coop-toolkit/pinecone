/* global Pinecone */

const accordions = document.querySelectorAll( '.accordion' );
Array.prototype.forEach.call( accordions, accordion => {
	new Pinecone.Accordion( accordion );
} );
