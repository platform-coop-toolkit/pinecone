module.exports = {
	title: 'Input',
	label: 'Input',
	status: 'wip',
	inverse: false,
	context: {
		inputs: [
			{
				name: 'input'
			},
			{
				name: 'password',
				type: 'password',
				label: 'Password',
				placeholder: 'Enter your password',
				description: false,
			},
			{
				name: 'email',
				type: 'email',
				label: 'Email Address',
				placeholder: 'me@example.com',
				description: false,
			},
			{
				name: 'url',
				type: 'url',
				label: 'Web Address',
				placeholder: 'https://example.com',
				description: false,
			},
			{
				name: 'tel',
				type: 'tel',
				label: 'Phone Number',
				placeholder: '1 (555) 123-4567',
				description: false,
			},
			{
				name: 'number',
				type: 'number',
				label: 'Number',
				placeholder: '42',
				description: false,
			},
			{
				name: 'error',
				type: 'text',
				error: true
			},
			{
				name: 'disabled',
				disabled: true,
			}
		]
	},
	variants: [
		{
			name: 'default-inverse',
			label: 'Default (Inverse)',
			context: {
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
			}
		},
		{
			name: 'unwrapped',
			label: 'Unwrapped',
			context: {
				component: 'input--unwrapped',
			}
		},
		{
			name: 'unwrapped-inverse',
			label: 'Unwrapped (Inverse)',
			context: {
				component: 'input--unwrapped',
				inverse: true,
				bodyClass: 'has-dark-mint-500-background-color',
			}
		}
	]
};
