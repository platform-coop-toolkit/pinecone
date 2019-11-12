module.exports = {
	title: 'Links',
	status: 'wip',
	context: {
		title: 'Links',
		inlineTitle: 'Inline Links',
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
		ctaTitle: 'Calls to Action',
		ctaVariants: [
			{
				label: 'Primary Call to Action'
			},
			{
				label: 'Secondary Call to Action',
				class: 'is-style-secondary'
			},
			{
				label: 'Off White Call to Action',
				class: 'is-style-off-white'
			},
			{
				label: 'White Call to Action',
				class: 'is-style-white'
			}
		],
		anchorText: 'Here is the anchor linked from above.'
	}
};
