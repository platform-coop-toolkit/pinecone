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
		svg: 'curriculum',
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
		svg: 'academic',
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

const resourceCount = 8;
const resourceData = [];

for ( let i = 0; i < resourceCount; i++ ) {
	const thisFormat = formats[i];

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
		showRemoveButton: true,
		requiresSubscription: i % 2 ? true : false
	} );
}

module.exports = {
	title: 'Favorites',
	status: 'wip',
	context: {
		bodyClass: 'page page-template-page-favorites',
		hasMenu: true,
		hasFooter: true,
		title: 'Favorites',
		cards: resourceData
	}
};
