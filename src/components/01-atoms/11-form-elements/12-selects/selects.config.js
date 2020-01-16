module.exports = {
	title: 'Selects',
	status: 'wip',
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
			name: 'Default (Light on Dark)',
			label: 'Default (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
