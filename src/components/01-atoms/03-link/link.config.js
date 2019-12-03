module.exports = {
	title: 'Links',
	status: 'wip',
	context: {
		title: 'Links',
		inlinePrefix: 'Here is ',
		inlineSuffix: ' within a paragraph.',
		inlineVariants: [
			{
				href: '/components',
				label: 'an internal link'
			},
			{
				href: 'https://example.com',
				label: 'an external link',
				rel: 'external'
			},
			{
				href: '#anchor',
				label: 'a relative link'
			}
		],
		anchorText: 'Here is the anchor linked from above.'
	}
};
