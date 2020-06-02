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
				name: 'error',
				error: true,
			},
			{
				name: 'disabled',
				disabled: true,
			}
		]
	},
	variants: [
		{
			name: 'Default Multiple',
			label: 'Default (Multiple)',
			context: {
				multiple: true
			}
		},
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true
			}
		},
		{
			name: 'Unwrapped',
			label: 'Unwrapped',
			context: {
				component: 'select--unwrapped'
			}
		},

		{
			name: 'Unwrapped Multiple',
			label: 'Unwrapped (Multiple)',
			context: {
				component: 'select--unwrapped',
				multiple: true
			}
		},
		{
			name: 'Unwrapped Inverse',
			label: 'Unwrapped (Inverse)',
			context: {
				component: 'select--unwrapped',
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true
			}
		}
	]
};
