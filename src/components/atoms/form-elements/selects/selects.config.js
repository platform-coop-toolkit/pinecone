module.exports = {
	title: 'Selects',
	status: 'wip',
	order: 3,
	context: {
		standAlone: false,
		selects: [
			{
				name: 'select'
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
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true
			}
		}
	]
};
