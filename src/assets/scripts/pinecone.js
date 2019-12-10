import * as Pinecone from './Pinecone/index.js';

window.pinecone = Pinecone;
window.pinecone.icons();

const controls = document.querySelectorAll( '.input-group [aria-expanded]' );
Array.prototype.forEach.call( controls, control => {
	control.addEventListener( 'click', ( event ) => {
		const expanded = 'true' === event.currentTarget.getAttribute( 'aria-expanded' ) || false;
		event.currentTarget.setAttribute( 'aria-expanded', !expanded );
	} );
} );

// TODO: Handle checkbox nesting
// TODO: Move this into scripts
