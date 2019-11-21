module.exports = {
	title: 'Cards',
	status: 'wip',
	context: {
		cardsTitle: 'Cards',
		cards: {
			resource: {
				id: 1,
				format: 'Article',
				title: 'Data as a common in the sharing economy',
				byline: 'CEPN',
				bylineLink: 'https://example.com/byline',
				locality: 'France',
				topics: ['Commons', 'Policy'],
				link: 'resource'
			},
			blog: {
				id: 2,
				format: 'Blog',
				title: 'Researching Worker-Owned Platforms',
				date: 'Apr 13, 2019',
				link: 'blog'
			},
			news: {
				id: 3,
				format: 'News',
				title: 'Platform co-ops: &lsquo;Something new is taking off&rsquo;',
				byline: 'Co-operative News',
				date: 'Aug 26, 2018',
				externalLink: 'https://example.com/news'
			},
			publication: {
				id: 4,
				format: 'Publication',
				title: 'Perspectives on Harmful Speech Online',
				date: 'Jun 27, 2017',
				link: 'publication'
			},
			event: {
				id: 5,
				format: 'Community Event',
				title: 'Toronto Platform Coop Meetup',
				date: 'Feb 23, 2019, 6:30-8:30PM',
				locality: 'OCAD University, 100 McCaul Street',
				link: 'event'
			},
			platformcoop: {
				id: 6,
				format: 'Platform Co-op',
				title: 'Aarhus Makers',
				locality: 'Aarhus, Denmark',
				externalLink: 'https://example.com/platformcoop'
			}
		},
	}
};
