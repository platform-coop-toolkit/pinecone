/**
 * Accordion class.
 */
class Accordion {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, options ) {
		this.container = container;
		this.config = {
			...{
				headingSelector: '.accordion__heading',
				paneSelector: '.accordion__pane',
				controlSelector: '.accordion__control'
			},
			...options
		};
		this.panes = this.container.querySelectorAll( this.config.paneSelector );
		Array.prototype.forEach.call( this.panes, pane => {
			this.initPane( pane );
		} );
		this.handleClicks = this.handleClicks.bind( this );
		this.addEventListeners();
	}

	/**
	 * Initialize a pane within the accordion.
	 *
	 * @param {DomNode} pane
	 */
	initPane( pane ) {
		const heading = pane.querySelector( this.config.headingSelector );
		const ctrl = document.createElement( 'button' );
		ctrl.setAttribute( 'class', 'accordion__control' );
		ctrl.setAttribute( 'aria-expanded', 'false' );
		ctrl.setAttribute( 'type', 'button' );
		ctrl.innerHTML = `
			${heading.textContent}
			<svg class="icon icon--chevron-down" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path id="chevron-down" d="m10 15a1 1 0 0 1 -.71-.29l-5-5a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5a1 1 0 0 1 -.71.29z" fill="currentColor"/></svg>
		`;
		heading.parentNode.insertBefore( ctrl, heading.nextElementSibling );
		heading.parentNode.removeChild( heading );
	}

	/**
	 *
	 * @param {Event} event
	 */
	handleClicks( event ) {
		if ( ! ( event.target.matches || event.target.matchesSelector || event.target.msMatchesSelector || event.target.mozMatchesSelector || event.target.webkitMatchesSelector || event.target.oMatchesSelector ).call( event.target, this.config.controlSelector ) ) {
			return;
		}

		const expanded = 'true' === event.target.getAttribute( 'aria-expanded' ) || false;
		Array.prototype.forEach.call( this.container.querySelectorAll( '.accordion__control' ), ctrl => {
			ctrl.setAttribute( 'aria-expanded', false );
		} );
		event.target.setAttribute( 'aria-expanded', !expanded );
		if ( expanded ) {
			event.target.parentNode.classList.remove( 'accordion__pane--expanded' );
		} else {
			event.target.parentNode.classList.add( 'accordion__pane--expanded' );
		}
	}

	/**
	 * Add click event listeners.
	 */
	addEventListeners() {
		this.container.addEventListener( 'click', this.handleClicks, false );
	}
}

var index = { Accordion };

export default index;
