module.exports = {
	title: 'Call to Action',
	status: 'ready',
	context: {
		href: 'https://example.com/call-to-action',
		label: 'Call to Action',
		standAlone: false
	},
	variants: [
		{
			name: 'External',
			context: {
				external: true,
			}
		},
		{
			name: 'Inverse',
			status: 'wip',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
