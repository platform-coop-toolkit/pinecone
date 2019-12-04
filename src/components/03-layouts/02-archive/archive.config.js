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
		]
	}
};
