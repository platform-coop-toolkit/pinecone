module.exports = {
	title: 'Text Areas',
	status: 'wip',
	order: 2,
	context: {
		name: 'text',
		standAlone: false,
		textareas: [
			{
				name: 'textarea'
			},
			{
				name: 'error',
				error: true,
				modifiers: ['error']
			},
			{
				name: 'disabled',
				disabled: true,
				modifiers: ['disabled']
			}
		]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
				modifiers: ['inverse']
			}
		}
	]
};
