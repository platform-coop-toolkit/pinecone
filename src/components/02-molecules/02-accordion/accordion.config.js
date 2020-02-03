const faker = require( 'faker' );
const title = require( 'title' );

const paneCount = 6;
const paneData = [];

for ( let i = 0; i < paneCount; i++ ) {
	paneData.push( {
		label: title( faker.lorem.words( 3 ) ),
		content: faker.lorem.paragraph()
	} );
}

module.exports = {
	title: 'Accordion',
	status: 'wip',
	context: {
		panes: paneData,
		standAlone: false
	},
	variants: [
		{
			name: 'Inverse',
			label: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color',
			}
		},
		{
			name: 'Filter List',
			label: 'Filter List',
			context: {
				modifier: 'filter-list',
				bodyClass: 'has-blue-500-background-color',
			}
		}
	]
};
