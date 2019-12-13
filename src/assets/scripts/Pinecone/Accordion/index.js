/**
 *
 * @param {DomNode} accordion
 */
const Accordion = function( accordion ) {
	this.accordion = accordion;
	this.panes = [];
};

/**
 * Initialize the accordion.
 */
Accordion.prototype.init = function () {
	this.accordion.addEventListener( 'click', this.handleClick.bind( this ) );

	Array.prototype.forEach.call( this.accordion.querySelectorAll( '.accordion' ), pane => {
		this.initPane( pane );
	} );
};

Accordion.prototype.initPane = function ( pane ) {
	const heading = pane.querySelector( '.accordion__heading' );
	const ctrl = document.createElement( 'button' );
	ctrl.setAttribute( 'class', 'accordion__control' );
	ctrl.setAttribute( 'aria-expanded', 'false' );
	ctrl.setAttribute( 'type', 'button' );
	ctrl.innerHTML = `
		${heading.textContent}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon icon-add" aria-hidden="true"><g fill="none" stroke="#203131" stroke-linecap="round" stroke-miterlimit="10" class="stroke" stroke-width="2"><path class="vert" d="m10 5v10"></path><path d="m5 10h10"></path></g></svg>
	`;
	heading.parentNode.insertBefore( ctrl, heading.nextElementSibling );
	heading.parentNode.removeChild( heading );
};

Accordion.prototype.handleClick = function( event ) {
	if ( 'accordion__control' !== event.target.className ) {
		return;
	}

	const expanded = 'true' === event.target.getAttribute( 'aria-expanded' ) || false;
	Array.prototype.forEach.call( this.accordion.querySelectorAll( '.accordion__control' ), ctrl => {
		ctrl.setAttribute( 'aria-expanded', false );
	} );
	event.target.setAttribute( 'aria-expanded', !expanded );
};

export {Accordion};
