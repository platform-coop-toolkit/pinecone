module.exports = {
	title: 'Checkbox',
	status: 'wip',
	context: {
		label: 'Checkbox',
		value: 'checkbox',
		name: 'name',
		standAlone: false
	},
	variants: [
		{
			name: 'Checked',
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
			name: 'Checked (Light on Dark)',
			label: 'Checked (Light on Dark)',
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
