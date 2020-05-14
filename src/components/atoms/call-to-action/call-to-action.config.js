module.exports = {
	title: 'Call to Action',
	status: 'wip',
	order: 60,
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
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
