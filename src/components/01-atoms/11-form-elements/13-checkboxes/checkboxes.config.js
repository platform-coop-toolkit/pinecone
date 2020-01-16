module.exports = {
	title: 'Checkboxes',
	status: 'wip',
	context: {
		standAlone: false,
		checkboxes: [
			{
				name: 'checkbox',
				standAlone: false
			},
			{
				name: 'checkbox',
				checked: true,
				standAlone: false
			},
			{
				name: 'checkbox',
				value: 'indeterminate',
				standAlone: false
			},
			{
				name: 'checkbox',
				disabled: true,
				standAlone: false
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
