const faker = require( 'faker' );
const linkCount = 6;
const items = [];

for ( let i = 0; i < linkCount; i++ ) {
	items.push( {
		label: faker.lorem.words( 3 ),
		href: `/link-${1}`,
		current: ( 0 === i ) || false
	} );
}

module.exports = {
	title: 'Link List',
	status: 'wip',
	context: {
		standAlone: false,
		items: items
	},
	variants: [
		{
			name: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
