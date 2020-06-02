module.exports = {
	title: 'Radio Buttons',
	label: 'Radio Buttons',
	status: 'ready',
	context: {
		component: 'radio-button',
		radioButtons: [
			{
				label: 'Radio initially unchecked',
				value: 'radio-initially-unchecked'
			},
			{
				label: 'Radio initially checked',
				value: 'radio-initially-checked',
				checked: true
			},
			{
				label: 'Radio disabled',
				value: 'radio-disabled',
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
				bodyClass: 'has-dark-mint-500-background-color',
			}
		},
		{
			name: 'Unwrapped',
			label: 'Unwrapped',
			context: {
				component: 'radio-button--unwrapped',
			}
		},
		{
			name: 'Unwrapped Inverse',
			label: 'Unwrapped (Inverse)',
			context: {
				component: 'radio-button--unwrapped',
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
			}
		}
	]
};
