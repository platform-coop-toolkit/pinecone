/**
 * Card class.
 */
class Card {
	/**
	 * Constructor.
	 *
	 * @param {DomNode} card
	 * @param {Object} options
	 */
	constructor( card, options ) {
		this.card = card;
		this.config = {
			...{
				cardLinkSelector: '.card__link'
			},
			...options
		};

		this.initCard( card );
	}

	/**
	 * Initialize card
	 *
	 * @param {DomNode} card
	 */
	initCard( card ) {
		const link = card.querySelector( this.config.cardLinkSelector );
		let down, up;
		card.style.cursor = 'pointer';
		card.onmousedown = () => down = +new Date();
		card.onmouseup = () => {
			up = +new Date();
			if ( 200 > ( up - down ) ) {
				link.click();
			}
		};
	}
}

export default Card;
