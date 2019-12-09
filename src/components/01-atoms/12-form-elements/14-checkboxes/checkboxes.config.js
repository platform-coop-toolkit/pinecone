module.exports = {
	title: 'Checkboxes',
	status: 'wip',
	context: {
		standAlone: false,
		checkboxes: [
			{
				name: 'checkbox'
			},
			{
				name: 'checkbox',
				checked: true
			},
			{
				name: 'checkbox',
				value: 'indeterminate',
			},
			{
				name: 'checkbox',
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
