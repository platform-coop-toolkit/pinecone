module.exports = {
	title: 'Search',
	status: 'wip',
	context: {
		standAlone: false,
		name: 's',
		placeholder: 'Search…',
		label: 'search',
		submitLabel: 'submit search'
	},
	variants: [
		{
			name: 'Inverse',
			label: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
