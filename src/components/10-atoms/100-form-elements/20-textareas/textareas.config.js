module.exports = {
	title: 'Text Areas',
	status: 'wip',
	context: {
		name: 'text',
		component: 'textarea',
		textareas: [
			{
				name: 'textarea'
			},
			{
				name: 'error',
				error: true,
			},
			{
				name: 'disabled',
				disabled: true,
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
			}
		},
		{
			name: 'Unwrapped',
			label: 'Unwrapped',
			context: {
				component: 'textarea--unwrapped'
			}
		},
		{
			name: 'Unwrapped Inverse',
			label: 'Unwrapped (Inverse)',
			context: {
				component: 'textarea--unwrapped',
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
			}
		}
	]
};
