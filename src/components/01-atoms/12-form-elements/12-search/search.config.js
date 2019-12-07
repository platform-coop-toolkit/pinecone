module.exports = {
	title: 'Search Input',
	status: 'wip',
	context: {
		label: 'Search',
		name: 's',
		placeholder: 'Example search',
		standAlone: false
	},
	variants: [
		{
			name: 'Disabled',
			context: {
				disabled: true
			}
		},
		{
			name: 'Default (Light on Dark)',
			label: 'Default (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		},
		{
			name: 'Disabled (Light on Dark)',
			label: 'Disabled (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				disabled: true
			}
		}
	]
};
