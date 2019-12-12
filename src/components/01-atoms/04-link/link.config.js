module.exports = {
	title: 'Link',
	status: 'wip',
	context: {
		href: '/internal-link',
		label: 'Link'
	},
	variants: [
		{
			name: 'External',
			context: {
				href: 'https://example.com',
				rel: 'external'
			}
		},
		{
			name: 'Relative',
			context: {
				href: '#',
			}
		}
	]
};
