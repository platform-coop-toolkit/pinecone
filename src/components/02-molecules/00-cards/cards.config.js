module.exports = {
	title: 'Cards',
	status: 'wip',
	context: {
		cardsTitle: 'Cards',
		cards: {
			resource: {
				type: 'resource',
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
				type: 'blog',
				id: 2,
				format: 'Blog',
				title: 'Researching Worker-Owned Platforms',
				date: 'Apr 13, 2019',
				link: 'blog'
			},
			news: {
				type: 'news',
				id: 3,
				format: 'News',
				title: 'Platform co-ops: &lsquo;Something new is taking off&rsquo;',
				byline: 'Co-operative News',
				date: 'Aug 26, 2018',
				externalLink: 'https://example.com/news'
			},
			publication: {
				type: 'publication',
				id: 4,
				format: 'Publication',
				title: 'Perspectives on Harmful Speech Online',
				date: 'Jun 27, 2017',
				link: 'publication'
			},
			event: {
				type: 'event',
				id: 5,
				format: 'Community Event',
				title: 'Toronto Platform Coop Meetup',
				date: 'Feb 23, 2019, 6:30-8:30PM',
				locality: 'OCAD University, 100 McCaul Street',
				link: 'event'
			},
			platformcoop: {
				type: 'platformcoop',
				id: 6,
				format: 'Platform Co-op',
				title: 'Aarhus Makers',
				locality: 'Aarhus, Denmark',
				externalLink: 'https://example.com/platformcoop'
			},
			blogWithImage: {
				type: 'blog',
				id: 7,
				format: 'Blog',
				title: 'Who Owns the World?',
				date: 'Nov 12, 2019',
				link: 'blog',
				image: 'https://platform.coop/wp-content/uploads/2019/11/5J6A6919-2-367x165.jpg'
			},
			person: {
				type: 'person',
				id: 8,
				title: 'Esteban Kelly',
				description: 'Executive Director, US Federation of Worker Cooperatives',
				link: 'person',
				image: 'https://platform.coop/wp-content/uploads/2019/09/Headshot-Esteban-Kelly-367x250.jpg'
			}
		},
	}
};
