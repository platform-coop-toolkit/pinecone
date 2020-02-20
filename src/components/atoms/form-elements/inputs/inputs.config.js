module.exports = {
	title: 'Text Input',
	status: 'wip',
	order: 1,
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
			name: 'Default Invers',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
