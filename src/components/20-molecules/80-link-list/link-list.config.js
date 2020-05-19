const linkCount = 6;
const items = [];

for ( let i = 1; i <= linkCount; i++ ) {
	items.push( {
		label: `Link List Item ${i}`,
		href: `/link-${i}`,
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
