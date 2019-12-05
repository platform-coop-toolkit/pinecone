const faker = require( 'faker' );
const linkCount = 6;
const linkData = [];

for ( let i = 0; i < linkCount; i++ ) {
	linkData.push( {
		label: faker.lorem.words( 3 ),
		href: `/link-${1}`
	} );
}

module.exports = {
	title: 'Link List',
	status: 'wip',
	context: {
		title: 'Link List',
		linkData: linkData
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
