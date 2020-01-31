module.exports = {
	title: 'Call to Action',
	status: 'wip',
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
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
