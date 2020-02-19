module.exports = {
	title: 'Checkboxes',
	status: 'wip',
	order: 4,
	context: {
		standAlone: false,
		checkboxes: [
			{
				name: 'checkbox',
				standAlone: false
			},
			{
				name: 'checkbox',
				checked: true,
				standAlone: false
			},
			{
				name: 'checkbox',
				value: 'indeterminate',
				standAlone: false
			},
			{
				name: 'checkbox',
				disabled: true,
				standAlone: false
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
