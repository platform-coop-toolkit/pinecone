import * as Pinecone from './Pinecone/index.js';

window.pinecone = Pinecone;
window.pinecone.icons();

/**
 * Show results.
 */
const showResults = function() {
	const slugify = require( 'slugify' );
	const resources = document.querySelectorAll( '.card' );
	const checkedFormats = Array.from( document.querySelectorAll( '.input-group.format [type="checkbox"]:checked' ) );
	if ( 0 < checkedFormats.length ) {
		const resourceList = document.querySelector( '.resource-list' );
		const fmts = checkedFormats.map( format => format.value );
		const fmtLabels = checkedFormats.map( format => document.querySelector( `[for="${format.id}"]` ).innerText );
		Array.prototype.forEach.call( resources, resource => {
			if ( fmts.includes( resource.getAttribute( 'data-format' ) ) ) {
				resource.removeAttribute( 'hidden' );
			} else {
				resource.hidden = true;
			}
		} );

		const currentTags = document.querySelector( '.tag-buttons' );
		if ( currentTags ) {
			currentTags.parentNode.removeChild( currentTags );
		}

		const selectedTags = document.createElement( 'ul' );
		selectedTags.className = 'tag-buttons';
		Array.prototype.forEach.call( fmtLabels, label => {
			const li = document.createElement( 'li' );
			li.className = 'tag-button';
			const btn = document.createElement( 'button' );
			btn.className = 'tag-button__button';
			btn.setAttribute( 'data-id', `format-${slugify( label, {lower: true} )}` );
			btn.innerHTML = `
					<span class="screen-reader-text">Remove </span>${label} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon icon-close" aria-hidden="true"><g fill="none" stroke="#203131" stroke-linecap="round" stroke-miterlimit="10" class="stroke" stroke-width="2"><path d="m5 15 10-10"></path><path d="m15 15-10-10"></path></g></svg>
				`;
			li.appendChild( btn );
			selectedTags.appendChild( li );
		} );
		resourceList.insertBefore( selectedTags, resourceList.firstChild );
	} else {
		Array.prototype.forEach.call( resources, resource => {
			resource.removeAttribute( 'hidden' );
		} );

		const currentTags = document.querySelector( '.tag-buttons' );
		if ( currentTags ) {
			currentTags.parentNode.removeChild( currentTags );
		}
	}
};

const applyButton = document.getElementById( 'apply-filters' );
applyButton.addEventListener( 'click', showResults );

// const elems = document.querySelectorAll( 'body > *' );

const showFilters = document.getElementById( 'show-filters' );
showFilters.addEventListener( 'click', ( event ) => {
	// TODO: Ensure that focus is trapped in container.
	// Array.prototype.forEach.call( elems, elem => {
	// 	elem.setAttribute( 'inert', 'inert' );
	// } );
	document.body.style.position = 'fixed';
	document.body.style.overflow = 'hidden';
	const filterContainer = event.currentTarget.parentNode;
	const heading = filterContainer.querySelector( 'h2' );
	const accordions = filterContainer.querySelector( '.accordions' );
	filterContainer.classList.add( 'expanded' );
	heading.classList.remove( 'screen-reader-text' );
	heading.focus();
	accordions.style.display = 'block';
	window.pinecone.accordions();
} );

const closeFilters = document.getElementById( 'hide-filters' );
closeFilters.addEventListener( 'click', ( event ) => {
	// TODO: Restore focus to main document.
	// Array.prototype.forEach.call( elems, elem => {
	// 	elem.removeAttribute( 'inert' );
	// } );
	const filterContainer = event.currentTarget.parentNode;
	const heading = filterContainer.querySelector( 'h2' );
	const accordions = filterContainer.querySelector( '.accordions' );
	filterContainer.classList.remove( 'expanded' );
	heading.classList.add( 'screen-reader-text' );
	accordions.style.display = 'none';
	showFilters.focus();
} );
