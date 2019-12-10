const faker = require( 'faker' );
const title = require( 'title' );

const formats = [
	{
		label: 'Audio',
		svg: 'audio',
	},
	{
		label: 'Case Study',
		svg: 'case-study',
	},
	{
		label: 'Toolkit',
		svg: 'toolkit',
	},
	{
		label: 'Educational Curriculum',
		svg: 'educational-curriculum',
	},
	{
		label: 'Video',
		svg: 'video',
	},
	{
		label: 'Article',
		svg: 'article',
	},
	{
		label: 'Book',
		svg: 'book',
	},
	{
		label: 'Academic Paper',
		svg: 'academic-paper',
	},
	{
		label: 'Report',
		svg: 'report',
	},
	{
		label: 'Presentation Slides',
		svg: 'presentation',
	},
	{
		label: 'Online Training',
		svg: 'online-training',
	},
];

const resourceCount = 12;
const resourceData = [];

for ( let i = 0; i < resourceCount; i++ ) {
	let thisFormat = formats[i];
	if ( 10 < i ) {
		thisFormat = formats[i - 11];
	}

	resourceData.push( {
		id: i,
		modifier: 'resource',
		format: thisFormat.label,
		formatIcon: thisFormat.svg,
		name: 'Resource',
		title: title( faker.lorem.words( faker.random.number( { min: 4, max: 12 } ) ) ),
		byline: title( faker.lorem.words( faker.random.number( { min: 2, max: 4 } ) ) ),
		locality: faker.address.country(),
		topics: [title( faker.company.catchPhraseNoun() ), title( faker.company.catchPhraseNoun() )],
		topicCount: faker.random.number( { min: 3, max: 7 } ),
		href: 'resource',
		standAlone: true,
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
		filterLists: [
			{
				label: 'Location of Relevance',
			},
			{
				label: 'Goals',
			},
			{
				label: 'Topics',
			},
			{
				label: 'Format',
			},
			{
				label: 'Sector',
			},
		],
		cards: resourceData
	}
};
