module.exports = {
	title: 'Text Input',
	label: 'Text Input',
	status: 'wip',
	inverse: false,
	context: {
		standAlone: false,
		inputs: [
			{
				name: 'input'
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
			name: 'default_inverse',
			label: 'Default (Inverse)',
			context: {
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
				modifiers: ['inverse']
			}
		}
	]
};
