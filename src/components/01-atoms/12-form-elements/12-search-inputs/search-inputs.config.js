module.exports = {
	title: 'Search Input',
	status: 'wip',
	context: {
		standAlone: false,
		searchInputs: [
			{
				name: 's',
			},
			{
				name: 'disabled',
				disabled: true
			}
		]
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
