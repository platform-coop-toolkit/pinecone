const resourceCount = 12;
const resourceData = [];

for ( let i = 0; i < resourceCount; i++ ) {
	resourceData.push( {
		id: i,
		format: 'article',
		name: 'Resource',
		cardTitle: 'Data as a common in the sharing economy',
		byline: 'Centre d&rsquo;économie Paris Nord',
		locality: 'France',
		topics: ['Data', 'Policy'],
		topicCount: 4,
		link: 'resource',
		language: 'English',
		title: false,
		withWrapper: false,
	} );
}

module.exports = {
	title: 'Archive',
	status: 'wip',
	context: {
		bodyClass: 'archive',
		hasMenu: true,
		title: 'Browse all',
		scriptCall: 'window.pinecone.cards(); window.pinecone.accordions();',
		accordions: [
			{ accordionLabel: 'Location of Relevance' },
			{ accordionLabel: 'Goals' },
			{ accordionLabel: 'Topics' },
			{ accordionLabel: 'Format' },
			{ accordionLabel: 'Sector' },
		],
		cards: resourceData
	}
};
