const faker = require( 'faker' );

const accordionCount = 6;
const accordionData = [];

for ( let i = 0; i < accordionCount; i++ ) {
	accordionData.push( {
		accordionLabel: faker.lorem.words( 3 ),
		accordionContent: faker.lorem.paragraph()
	} );
}

module.exports = {
	title: 'Accordion',
	status: 'wip',
	context: {
		scriptCall: 'window.pinecone.accordions();',
		title: 'Accordions',
		accordions: accordionData
	},
	variants: [
		{
			name: 'Light on Dark',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
