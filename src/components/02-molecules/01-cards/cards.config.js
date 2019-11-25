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
				byline: 'Centre d&rsquo;économie Paris Nord',
				locality: 'France',
				topics: ['Commons', 'Policy'],
				topicCount: 4,
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
			event: {
				type: 'event',
				id: 3,
				format: 'Community Event',
				title: 'Toronto Platform Coop Meetup',
				date: 'Feb 23, 2019, 6:30-8:30PM',
				locality: 'OCAD University, 100 McCaul Street',
				link: 'event'
			},
			platformcoop: {
				type: 'platformcoop',
				id: 4,
				format: 'Platform Co-op',
				title: 'Aarhus Makers',
				locality: 'Aarhus, Denmark',
				link: 'https://example.com/platformcoop',
				externalLink: true
			},
			blogWithImage: {
				type: 'blog',
				id: 5,
				format: 'Blog',
				title: 'Who Owns the World?',
				date: 'Nov 12, 2019',
				link: 'blog',
				image: '/images/blog.jpg'
			},
			story: {
				type: 'story',
				id: 6,
				format: 'Worker Story',
				title: 'SEWA Federation',
				locality: 'Gujarat, India',
				link: 'story',
				image: '/images/story.jpg'
			},
			person: {
				type: 'person',
				id: 7,
				title: 'Trebor Scholz',
				description: 'Founding Director, Institute for the Cooperative Digital Economy',
				link: 'person',
				image: '/images/person.jpg'
			},
			project: {
				type: 'project',
				id: 8,
				format: 'Project',
				link: 'https://github/platform-coop-toolkit',
				title: 'Platform Cooperative Development Kit',
				description: 'An open source toolkit of software to support platform cooperatives.',
			}
		},
	}
};
