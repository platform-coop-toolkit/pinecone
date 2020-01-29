/* global Pinecone */

const menu = document.querySelector( '.menu' );
const menuToggle = document.querySelector( '.menu-toggle' );

if ( menu && menuToggle ) {
	new Pinecone.Menu( menu, menuToggle );
}

const cards = document.querySelectorAll( '.card' );

if ( cards ) {
	Array.prototype.forEach.call( cards, card => {
		new Pinecone.Card( card );
	} );
}

const icons = document.querySelectorAll( 'svg' );

if ( icons ) {
	Array.prototype.forEach.call( icons, icon => {
		new Pinecone.Icon( icon );
	} );
}

const accordions = document.querySelectorAll( '.accordion' );

if ( accordions ) {
	Array.prototype.forEach.call( accordions, accordion => {
		new Pinecone.Accordion( accordion );
	} );
}

const filterContainer = document.querySelector( '.filters' );
const showFilters = document.querySelector( '#show-filters' );
const hideFilters = document.querySelector( '#hide-filters' );

if ( showFilters && hideFilters && filterContainer ) {
	new Pinecone.FilterList( filterContainer, showFilters, hideFilters );
}

const nestedCheckboxContainers = document.querySelectorAll( '.input-group__parent > li' );
if ( 0 < nestedCheckboxContainers.length ) {
	Array.prototype.forEach.call( nestedCheckboxContainers, container => {
		const input = Array.prototype.filter.call( container.children, function ( child ) {
			return child.matches( 'input' );
		} ).shift();
		const subInputs = container.querySelectorAll( '.input-group__descendant input' );
		if ( 0 < subInputs.length ) {
			new Pinecone.NestedCheckbox( container, input, subInputs );
		}
	} );
}

const deselectButtons = document.querySelectorAll( 'button[id^="deselect-"]' );
if ( 0 < deselectButtons.length ) {
	Array.prototype.forEach.call( deselectButtons, btn => {
		new Pinecone.DeselectAll( btn );
	} );
}

const menuButtonContainers = document.querySelectorAll( 'main > .menu-button' );
if ( 0 < menuButtonContainers.length ) {
	Array.prototype.forEach.call( menuButtonContainers, container => {
		new Pinecone.MenuButton( container );
	} );
}

const sortMenuButtonContainer = document.querySelector( '.sort .menu-button' );
if ( sortMenuButtonContainer ) {
	new Pinecone.MenuButton( sortMenuButtonContainer, { placement: 'bottom' } );
}

const resourceActions = document.querySelectorAll( '.resource__actions .menu-button' );
if ( 0 < resourceActions.length ) {
	new Pinecone.MenuButton( resourceActions[0] );
	new Pinecone.MenuButton( resourceActions[1] );
}

new Pinecone.Notification();

const filterDisclosureLabels = document.querySelectorAll( '.filter-disclosure-label' );

if ( filterDisclosureLabels ) {
	Array.prototype.forEach.call( filterDisclosureLabels, label => {
		new Pinecone.DisclosureButton( label, { buttonVariant: 'button--disc', visuallyHiddenLabel: true } );
	} );
}

const disclosureLabels = document.querySelectorAll( '.disclosure-label' );

if ( disclosureLabels ) {
	Array.prototype.forEach.call( disclosureLabels, label => {
		new Pinecone.DisclosureButton( label );
	} );
}

const searchToggle = document.querySelector( '.search-toggle' );
if ( searchToggle ) {
	new Pinecone.SearchToggle( searchToggle, searchToggle.nextElementSibling );
}
