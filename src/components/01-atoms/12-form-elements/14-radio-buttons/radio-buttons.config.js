module.exports = {
	title: 'Radio Buttons',
	label: 'Radio Buttons',
	status: 'wip',
	context: {
		standAlone: false,
		radioButtons: [
			{
				name: 'radio'
			},
			{
				name: 'radio',
				checked: true
			},
			{
				name: 'radio',
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
