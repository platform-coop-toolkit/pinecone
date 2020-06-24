module.exports = {
	title: 'Checkboxes',
	status: 'ready',
	context: {
		component: 'checkbox',
		checkboxes: [
			{
				name: 'checkboxes',
				value: 'Initially unchecked value',
				label: 'Initially unchecked',
			},
			{
				name: 'checkboxes',
				value: 'Initially checked value',
				label: 'Initially checked',
				checked: true,
			},
			{
				name: 'checkboxes',
				value: 'Disabled checkbox value',
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
		},
		{
			name: 'Unwrapped ',
			label: 'Unwrapped',
			context: {
				component: 'checkbox--unwrapped'
			}
		},
		{
			name: 'Unwrapped Inverse',
			label: 'Unwrapped (Inverse)',
			context: {
				component: 'checkbox--unwrapped',
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true,
			}
		}
	]
};
