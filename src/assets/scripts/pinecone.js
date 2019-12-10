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

const parentFilters = document.querySelectorAll( '.input-group__parent > li > [type="checkbox"]' );
Array.prototype.forEach.call( parentFilters, filter => {
	filter.addEventListener( 'change', ( event ) => {
		let childFilters = false;
		const subList = event.currentTarget.parentNode.querySelector( '.input-group__descendant' );
		if ( subList ) {
			childFilters = subList.querySelectorAll( '[type="checkbox"]' );
		}
		if ( event.currentTarget.checked ) {
			if ( childFilters ) {
				Array.prototype.forEach.call( childFilters, childFilter => {
					childFilter.checked = true;
				} );
			}
		} else {
			if ( childFilters ) {
				Array.prototype.forEach.call( childFilters, childFilter => {
					childFilter.checked = false;
				} );
			}
		}
	} );
} );

const descendantFilters = document.querySelectorAll( '.input-group__descendant > li > [type="checkbox"]' );
Array.prototype.forEach.call( descendantFilters, filter => {
	filter.addEventListener( 'change', ( event ) => {
		const parentFilter = event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector( '.input-group__parent > li > [type="checkbox"]' );
		const siblingFilters = event.currentTarget.parentNode.parentNode.querySelectorAll( '[type="checkbox"]' );
		const checkedSiblingFilters = event.currentTarget.parentNode.parentNode.querySelectorAll( '[type="checkbox"]:checked' );
		if ( event.currentTarget.checked ) {
			if ( checkedSiblingFilters.length === siblingFilters.length ) {
				parentFilter.indeterminate = false;
				parentFilter.checked = true;
			} else {			parentFilter.indeterminate = true;
			}
		} else {
			if ( 0 < checkedSiblingFilters.length ) {
				parentFilter.indeterminate = true;
			} else {
				parentFilter.indeterminate = false;
				parentFilter.checked = false;
			}

		}
	} );
} );
