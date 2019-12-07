module.exports = {
	title: 'Radio Button',
	label: 'Radio Button',
	status: 'wip',
	context: {
		label: 'Radio Button',
		value: 'radio',
		name: 'name',
		standAlone: false
	},
	variants: [
		{
			name: 'Selected',
			context: {
				checked: true
			}
		},
		{
			name: 'Disabled',
			context: {
				disabled: true
			}
		},
		{
			name: 'Default (Light on Dark)',
			label: 'Default (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		},
		{
			name: 'Selected (Light on Dark)',
			label: 'Selected (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				checked: true
			}
		},
		{
			name: 'Disabled (Light on Dark)',
			label: 'Disabled (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				disabled: true
			}
		}
	]
};
