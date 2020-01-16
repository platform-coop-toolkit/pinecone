module.exports = {
	title: 'Text Input',
	status: 'wip',
	context: {
		standAlone: false,
		inputs: [
			{
				name: 'input'
			},
			{
				name: 'error',
				value: 'Incorrect input',
				error: 'Sorry, that appears to be incorrect.'
			},
			{
				name: 'disabled',
				disabled: true
			},
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
