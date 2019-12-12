module.exports = {
	title: 'Text Input',
	status: 'wip',
	context: {
		label: 'Text Input',
		name: 'text',
		description: 'Description for this text input.',
		placeholder: 'Example input',
		error: false,
		disabled: false
	},
	variants: [
		{
			name: 'Error',
			context: {
				value: 'Incorrect input',
				error: 'Sorry, that appears to be incorrect.'
			}
		},
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
			name: 'Error (Light on Dark)',
			label: 'Error (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				value: 'Incorrect input',
				error: 'Sorry, that appears to be incorrect.'
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
