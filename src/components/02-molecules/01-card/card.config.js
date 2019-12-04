module.exports = {
	title: 'Card',
	status: 'wip',
	context: {
		scriptCall: 'window.pinecone.cards();',
		cardTitle: 'Card',
		format: 'Card',
		name: 'Generic Card',
		link: 'https://example.com',
		withWrapper: true
	},
	variants: [
		{
			name: 'Resource',
			context: {
				modifier: 'resource',
				id: 1,
				format: 'Article',
				name: 'Resource',
				cardTitle: 'Data as a common in the sharing economy',
				byline: 'Centre d&rsquo;économie Paris Nord',
				locality: 'France',
				topics: ['Commons', 'Policy'],
				topicCount: 4,
				link: 'resource',
				language: 'English'
			}
		},
		{
			name: 'Blog',
			context: {
				modifier: 'blog',
				id: 2,
				format: 'Blog',
				cardTitle: 'Researching Worker-Owned Platforms',
				date: 'Apr 13, 2019',
				link: 'blog'
			}
		},
		{
			name: 'Event',
			context: {
				modifier: 'event',
				id: 3,
				format: 'Community Event',
				name: 'Event',
				cardTitle: 'Toronto Platform Coop Meetup',
				date: 'Feb 23, 2019, 6:30-8:30PM',
				locality: 'OCAD University, 100 McCaul Street',
				link: 'event'
			}
		},
		{
			name: 'Platform Co-op',
			label: 'Platform Co-op',
			context: {
				modifier: 'platformcoop',
				id: 4,
				format: 'Platform Co-op',
				cardTitle: 'Aarhus Makers',
				locality: 'Aarhus, Denmark',
				link: 'https://example.com/platformcoop',
				externalLink: true
			}
		},
		{
			name: 'Blog with Image',
			context: {
				modifier: 'blog',
				id: 5,
				format: 'Blog',
				name: 'Blog with Image',
				cardTitle: 'Who Owns the World?',
				date: 'Nov 12, 2019',
				link: 'blog',
				image: '/images/blog.jpg'
			}
		},
		{
			name: 'Story',
			context: {
				modifier: 'story',
				id: 6,
				name: 'Story',
				format: 'Worker Story',
				cardTitle: 'SEWA Federation',
				locality: 'Gujarat, India',
				link: 'story',
				image: '/images/story.jpg'
			}
		},
		{
			name: 'Person',
			context: {
				modifier: 'person',
				id: 7,
				name: 'Person',
				cardTitle: 'Trebor Scholz',
				description: 'Founding Director, Institute for the Cooperative Digital Economy',
				link: 'person',
				image: '/images/person.jpg'
			}
		},
		{
			name: 'Project',
			context: {
				modifier: 'project',
				id: 8,
				format: 'Project',
				link: 'https://github/platform-coop-toolkit',
				cardTitle: 'Platform Cooperative Development Kit',
				description: 'An open source toolkit of software to support platform cooperatives.',
			}
		}
	]
};
