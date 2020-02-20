module.exports = {
	title: 'Text Areas',
	label: 'Text Areas',
	status: 'wip',
	order: 2,
	context: {
		label: 'Text Area',
		name: 'text',
		description: 'Description for this text area.',
		placeholder: 'Content goes here.',
		standAlone: false,
		textareas: [
			{
				name: 'textarea'
			},
			{
				name: 'error',
				value: 'Incorrect input',
				error: 'Sorry, that appears to be incorrect.'
			},
			{
				name: 'disabled',
				disabled: true
			}
		]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
