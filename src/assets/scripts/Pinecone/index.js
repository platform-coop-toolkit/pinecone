/**
 * Icon Handler.
 */
export function icons() {
	// Props Chris Coyier (https://css-tricks.com/inline-svg-cached/)

	const icons = document.querySelectorAll( 'svg.icon' );

	icons.forEach( icon => {
		const iconClasses = icon.classList;
		const ariaHidden = icon.getAttribute( 'aria-hidden' );
		const viewBox = icon.getAttribute( 'viewBox' );
		const url = ( icon.querySelector( 'use' ) ) ? icon.querySelector( 'use' ).getAttribute( 'xlink:href' ) : false;
		if ( url ) {
			fetch( url )
				.then( response => response.text() )
				.then( data => {
					const newEl = document.createElement( 'span' );
					newEl.innerHTML = data;
					newEl.firstChild.setAttribute( 'class', iconClasses );
					if ( ariaHidden )
						newEl.firstChild.setAttribute( 'aria-hidden', true );
					if ( viewBox )
						newEl.firstChild.setAttribute( 'viewBox', viewBox );
					icon.parentNode.replaceChild( newEl, icon );

					const parent = newEl.parentNode;
					while ( newEl.firstChild ) parent.insertBefore( newEl.firstChild, newEl );
					parent.removeChild( newEl );
				} );
		}
	} );
}

/**
 * Menu Handler.
 */
export function menu() {
	// Menu

	const menuToggle = document.querySelector( '.menu-toggle' );
	const primaryMenu = document.querySelector( '.menu' );

	if ( menuToggle && primaryMenu ) {
		const topLevelMenuItems = document.querySelectorAll( '.menu > li > *' );
		const parentMenus = primaryMenu.querySelectorAll( '.menu__submenu-wrapper' );

		menuToggle.onclick = () => {
			const currentState = menuToggle.getAttribute( 'aria-expanded' );
			const newState = ( 'true' !== currentState );
			menuToggle.setAttribute( 'aria-expanded', newState );
		};

		Array.prototype.forEach.call( parentMenus, parentMenu => {
			const linkEl = parentMenu.querySelector( 'a' );
			const menuButton = document.createElement( 'button' );
			menuButton.className = 'menu__item';
			menuButton.setAttribute( 'aria-expanded', false );
			menuButton.innerHTML = `${linkEl.innerHTML}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon icon--chevron-down"><path d="m15 9-5 5-5-5" fill="none" stroke="#203131" stroke-linecap="round" stroke-linejoin="round" class="stroke" stroke-width="2"></path></svg>`;
			parentMenu.insertBefore( menuButton, parentMenu.firstChild );
			parentMenu.removeChild( linkEl );
			menuButton.addEventListener( 'click', () => {
				const currentState = menuButton.getAttribute( 'aria-expanded' );
				const newState = ( 'true' !== currentState );
				menuButton.setAttribute( 'aria-expanded', newState );
			} );
			document.addEventListener( 'click', event => {
				if ( ! parentMenu.contains( event.target ) ) {
					menuButton.setAttribute( 'aria-expanded', false );
				}
			} );
			document.onkeydown = function( evt ) {
				evt = evt || window.event;
				let isEscape = false;
				if ( 'key' in evt ) {
					isEscape = 'Escape' == evt.key || 'Esc' == evt.key;
				} else {
					isEscape = 27 == evt.keyCode;
				}
				if ( isEscape ) {
					menuButton.setAttribute( 'aria-expanded', false );
				}
			};
		} );

		Array.prototype.forEach.call( topLevelMenuItems, topLevelMenuItem => {
			topLevelMenuItem.addEventListener( 'focus', () => {
				const openDropDown = primaryMenu.querySelector( '[aria-expanded="true"]' );
				if ( ! openDropDown ) {
					return;
				}
				openDropDown.setAttribute( 'aria-expanded', false );
			} );
		} );
	}
}

/**
 * Card Handler.
 **/
export function cards() {
	// Props Heydon Pickering (https://inclusive-components.design/cards/)
	const cards = document.querySelectorAll( '.card' );

	Array.prototype.forEach.call( cards, card => {
		const link = card.querySelector( 'h2 a' );
		let down, up;
		card.style.cursor = 'pointer';
		card.onmousedown = () => down = +new Date();
		card.onmouseup = () => {
			up = +new Date();
			if ( 200 > ( up - down ) ) {
				link.click();
			}
		};
	} );
}

/**
 * Accordion Handler.
 */
export function accordions() {
	// Props Heydon Pickering (https://inclusive-components.design/collapsible-sections/)
	const accordionGroups = document.querySelectorAll( '.accordions' );

	Array.prototype.forEach.call( accordionGroups, accordionGroup => {
		const accordions = accordionGroup.querySelectorAll( '.accordion' );
		const headings = accordionGroup.querySelectorAll( '.accordion__heading' );

		Array.prototype.forEach.call( headings, heading => {
			const accordion = heading.parentNode;
			const contents = heading.nextElementSibling;
			const btn = document.createElement( 'button' );
			btn.setAttribute( 'class', 'accordion__control' );
			btn.setAttribute( 'aria-expanded', 'false' );
			btn.innerHTML = `
					${heading.textContent}
					<svg aria-hidden="true" width="13" height="13" viewBox="0 0 13 13"><g transform="translate(-5721 -543)" fill="none" stroke="#203131" stroke-linecap="round" stroke-width="3"><line x2="10" transform="translate(5722.5 549.5)"/><line class="vert" y2="10" transform="translate(5727.5 544.5)"/></g></svg>
				`;
			heading.parentNode.insertBefore( btn, heading.nextElementSibling );
			heading.parentNode.removeChild( heading );

			contents.hidden = true;

			btn.onclick = () => {
				const expanded = 'true' === btn.getAttribute( 'aria-expanded' ) || false;
				Array.prototype.forEach.call( accordions, accordion => {
					const contents = accordion.querySelector( '.accordion__content' );
					const btn = accordion.querySelector( '.accordion__control' );
					accordion.classList.remove( 'accordion--expanded' );
					contents.hidden = true;
					btn.setAttribute( 'aria-expanded', false );
				} );
				btn.setAttribute( 'aria-expanded', !expanded );
				if ( expanded ) {
					accordion.classList.remove( 'accordion--expanded' );
				} else {
					accordion.classList.add( 'accordion--expanded' );
				}
				contents.hidden = expanded;
			};
		} );
	} );
}

