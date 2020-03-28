/**
 * Filter List Handler.
 */
class FilterList {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} container
	 * @param {Object} options
	 */
	constructor( container, showCtrl, hideCtrl, options ) {
		this.container = container;
		this.showCtrl = showCtrl;
		this.hideCtrl = hideCtrl;
		this.config = {
			...{
				showCtrlSelector: '#show-filters',
				hideCtrlSelector: '#hide-filters'
			},
			...options
		};

		this.handleOverlay = this.handleOverlay.bind( this );
		this.handleResize = this.handleResize.bind( this );
		this.addEventListeners();
	}

	/**
	 * Handle overlay.
	 */
	handleOverlay( event ) {
		if ( ! event.target.closest( this.config.showCtrlSelector ) && ! event.target.closest( this.config.hideCtrlSelector ) ) return false;

		const elems = document.querySelectorAll( 'body > *:not([aria-live])' );

		if ( event.target.closest( this.config.showCtrlSelector ) ) {
			document.body.classList.add( 'has-modal' );
			Array.prototype.forEach.call( elems, elem => {
				elem.inert = true;
			} );
			this.container.parentNode.removeChild( this.container );
			document.body.insertBefore( this.container, document.body.firstChild );
			const heading = this.container.querySelector( 'h2' );
			const accordion = this.container.querySelector( '.accordion' );
			const firstBtn = accordion.querySelector( 'button' );
			heading.classList.remove( 'screen-reader-text' );
			accordion.style.display = 'block';
			this.container.classList.add( 'filters--expanded' );
			firstBtn.focus();
		} else {
			Array.prototype.forEach.call( elems, elem => {
				elem.inert = false;
			} );
			this.container.classList.remove( 'filters--expanded' );
			this.container.parentNode.removeChild( this.container );
			this.showCtrl.parentNode.insertBefore( this.container, this.showCtrl.nextSibling );
			document.body.classList.remove( 'has-modal' );
			this.showCtrl.focus();
		}
	}

	/**
	 * Handle window resize events.
	 */
	handleResize() {
		let timeout;
		if ( this.container.classList.contains( 'filters--expanded' ) ) {
			if ( !timeout ) {
				timeout = setTimeout( this.removeOverlay( timeout ), 66 );
			}
		}
	}

	/**
	 * Resize function.
	 */
	removeOverlay( timeout ) { // eslint-disable-line no-unused-vars
		timeout = null;

		const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

		if ( 1279 < viewportWidth ) {
			const elems = document.querySelectorAll( 'body > *' );
			Array.prototype.forEach.call( elems, elem => {
				elem.removeAttribute( 'inert' );
			} );
			this.container.classList.remove( 'filters--expanded' );
			this.container.parentNode.removeChild( this.container );
			this.showCtrl.parentNode.insertBefore( this.container, this.showCtrl.nextSibling );
			document.body.classList.remove( 'has-modal' );
		}
	}

	/**
	 * Add event listeners.
	 */
	addEventListeners() {
		document.addEventListener( 'click', this.handleOverlay, false );
		window.addEventListener( 'resize', this.handleResize, false );
	}
}

export default FilterList;
