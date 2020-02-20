module.exports = {
	title: 'Radio Buttons',
	label: 'Radio Buttons',
	order: 5,
	status: 'wip',
	context: {
		standAlone: false,
		radioButtons: [
			{
				name: 'radio'
			},
			{
				name: 'radio',
				checked: true
			},
			{
				name: 'radio',
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
