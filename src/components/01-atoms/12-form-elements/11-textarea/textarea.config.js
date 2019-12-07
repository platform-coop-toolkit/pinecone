module.exports = {
	title: 'Text Area',
	label: 'Text Area',
	status: 'wip',
	context: {
		label: 'Text Area',
		name: 'text',
		description: 'Description for this text area.',
		placeholder: 'Content goes here.',
		standAlone: false,
	},
	variants: [
		{
			name: 'Error',
			context: {
				value: 'Incorrect input.',
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
				value: 'Incorrect input.',
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
