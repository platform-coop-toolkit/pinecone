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
