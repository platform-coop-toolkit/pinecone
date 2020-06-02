module.exports = {
	title: 'Checkboxes',
	status: 'ready',
	context: {
		standAlone: false,
		checkboxes: [
			{
				name: 'checkboxes',
				label: 'Initially unchecked',
			},
			{
				name: 'checkboxes',
				label: 'Initially checked',
				checked: true,
			},
			{
				name: 'checkboxes',
				label: 'Disabled checkbox',
				disabled: true,
			}
		]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true,
			}
		}
	]
};
