const faker = require( 'faker' );
const title = require( 'title' );

const accordionCount = 6;
const accordionData = [];

for ( let i = 0; i < accordionCount; i++ ) {
	accordionData.push( {
		accordionLabel: title( faker.lorem.words( 3 ) ),
		accordionContent: faker.lorem.paragraph()
	} );
}

module.exports = {
	title: 'Accordion',
	status: 'wip',
	context: {
		scriptCall: 'window.pinecone.accordions();',
		accordions: accordionData,
		standAlone: false
	},
	variants: [
		{
			name: 'Default (Light on Dark)',
			label: 'Default (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
