module.exports = {
	title: 'Radio Buttons',
	label: 'Radio Buttons',
	order: 5,
	status: 'wip',
	context: {
		radioButtons: [
			{
				name: 'radio',
				label: 'Radio initially unchecked'
			},
			{
				name: 'radio checked',
				label: 'Radio initially checked',
				checked: true
			},
			{
				name: 'radio disabled',
				label: 'Radio disabled',
				disabled: true
			}
		]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
