module.exports = {
	title: 'Link',
	status: 'wip',
	order: 5,
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
		},
		{
			name: 'default-inverse',
			label: 'Default (Inverse)',
			context: {
				className: 'link--inverse',
				href: '/internal-link--inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'external-inverse',
			label: 'External (Inverse)',
			context: {
				href: 'https://example.com/inverse',
				className: 'link--inverse',
				rel: 'external',
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'relative-inverse',
			label: 'Relative (Inverse)',
			context: {
				href: '#inverse',
				className: 'link--inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'breadcrumb',
			label: 'Breadcrumb',
			context: {
				label: 'Home',
				href: '/',
				className: 'link--breadcrumb',
			}
		}
	]
};
