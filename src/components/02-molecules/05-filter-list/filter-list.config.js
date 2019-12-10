module.exports = {
	name: 'Filter List',
	status: 'wip',
	context: {
		label: 'Topics',
		terms: [
			{
				label: 'Cooperative essentials',
				childrenCount: 5
			},
			{
				label: 'Business operations',
				childrenCount: 5
			},
			{
				label: 'Technology & platforms',
				children: [
					'Software development',
					'Platforms design',
					'Free software',
					'Data',
					'Algorithms',
					'Automation',
					'Blockchain',
					'Search engines'
				]
			},
			{
				label: 'Law & policy',
				childrenCount: 5
			},
			{
				label: 'Fair labour',
				childrenCount: 5
			},
			{
				label: 'Platform co-op theory',
				childrenCount: 5
			}
		],
		scriptCall: 'window.pinecone.accordions(); window.pinecone.filterList();',
		standAlone: false,
	}
};
