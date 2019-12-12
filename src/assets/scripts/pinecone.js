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

/**
 * Handles show/hide of the filter overlay.
 */
const handleFilterOverlay = function() {
	const elems = document.querySelectorAll( 'body > *' );
	document.body.classList.add( 'has-modal' );
	Array.prototype.forEach.call( elems, elem => {
		elem.setAttribute( 'inert', 'inert' );
	} );
	const filterContainer = document.querySelector( '.filter-sort__filters' );
	filterContainer.parentNode.removeChild( filterContainer );
	const overlay = filterContainer;
	document.body.insertBefore( overlay, document.body.firstChild );
	const heading = overlay.querySelector( 'h2' );
	const accordions = overlay.querySelector( '.accordions' );
	const closeButton = document.getElementById( 'hide-filters' );
	heading.classList.remove( 'screen-reader-text' );
	accordions.style.display = 'block';
	overlay.classList.add( 'expanded' );
	heading.focus();
	Pinecone.accordions();
	// Pinecone.filterList();

	closeButton.addEventListener( 'click', ( event ) => {
		Array.prototype.forEach.call( elems, elem => {
			elem.removeAttribute( 'inert' );
		} );
		const overlay = event.currentTarget.parentNode;
		const showFilters = document.getElementById( 'show-filters' );
		overlay.classList.remove( 'expanded' );
		overlay.parentNode.removeChild( overlay );
		showFilters.parentNode.insertBefore( overlay, showFilters.nextSibling );
		document.body.classList.remove( 'has-modal' );
		showFilters.focus();
	} );
};

const showFilters = document.getElementById( 'show-filters' );
showFilters.addEventListener( 'click', handleFilterOverlay );

/**
 * Handle resize events
 */
const handleResize = function() {
	let timeout;
	const overlay = document.querySelector( '.filter-sort__filters.expanded' );
	const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if ( overlay ) {
		if ( !timeout ) {
			timeout = setTimeout( function() {
				timeout = null;

				if ( 1279 < viewportWidth ) {
					const elems = document.querySelectorAll( 'body > *' );
					Array.prototype.forEach.call( elems, elem => {
						elem.removeAttribute( 'inert' );
					} );
					const showFilters = document.getElementById( 'show-filters' );
					overlay.classList.remove( 'expanded' );
					overlay.parentNode.removeChild( overlay );
					showFilters.parentNode.insertBefore( overlay, showFilters.nextSibling );
					document.body.classList.remove( 'has-modal' );
					Pinecone.accordions();
				}
			}, 66 );
		}
	} else {
		// Make sure accordions work.
		if ( 1279 < viewportWidth ) {
			Pinecone.accordions();
			Pinecone.filterList();
		}
	}
} ;

window.addEventListener( 'resize', handleResize, false );
