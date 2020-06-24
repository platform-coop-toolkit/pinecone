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
		label: 'Template',
		svg: 'template',
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
		label: 'Document',
		svg: 'document',
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
		byline: ( faker.random.boolean ) ? `${faker.name.firstName()} ${faker.name.lastName()}` : false,
		publisher: faker.company.companyName(),
		locality: faker.address.country(),
		topics: [title( faker.company.catchPhraseNoun() ), title( faker.company.catchPhraseNoun() )],
		topicCount: faker.random.number( { min: 3, max: 7 } ),
		href: 'resource',
		standAlone: true,
		requiresSubscription: i % 2 ? true : false
	} );
}

module.exports = {
	title: 'Archive',
	status: 'wip',
	context: {
		bodyClass: 'archive post-type-archive taxonomy',
		hasMenu: true,
		hasFooter: true,
		title: 'Browse all',
		currentTags: [
			{label: 'Platform cooperativism'},
			{label: 'Establish a governance structure'}
		],
		filterLists: [
			{
				label: 'Locations of relevance',
				terms: [
					{label:'Bangladesh'},
					{label:'Brazil'},
					{label:'Canada'},
					{label:'France'},
					{label:'Germany'},
					{label:'Hong Kong'},
					{label:'India'},
					{label:'Indonesia'},
					{label:'Italy'},
					{label:'Japan'},
					{label:'Netherlands'},
					{label:'South Africa'},
					{label:'Spain'},
					{label:'Sweden'},
					{label:'United Kingdom'},
					{label:'United States'}
				]
			},
			{
				label: 'Goals',
				terms: [
					{
						label: 'Learn the basics of platform cooperativism'
					},
					{
						label: 'Build a co-op',
						children: [
							{label:'Write bylaws', value:'build a co-op value 1'},
							{label:'Build a business model', value:'build a co-op value 2'},
							{label:'Establish a governance structure', value:'build a co-op value 3'},
							{label:'Incorporate a co-op', value:'build a co-op value 4'},
							{label:'Build a marketing plan', value:'build a co-op value 5'},
							{label:'Pick a co-op type', value:'build a co-op value 6'},
							{label:'Make decisions collaboratively', value:'build a co-op value 7'}
						]
					},
					{
						label: 'Build a platform or protocol',
						children: [
							{label:'Understand the design process', value:'build a platform value 1'},
							{label:'Design for privacy', value:'build a platform value 2'},
							{label:'Design for inclusion', value:'build a platform value 3'},
							{label:'Build accessible digital tools', value:'build a platform value 4'},
							{label:'Build open source software', value:'build a platform value 5'}
						]
					},
					{
						label: 'Transition to a co-op',
					},
					{
						label: 'Advocate for policy change',
					},
				]
			},
			{
				label: 'Topics',
				terms: [
					{
						label: 'Cooperative essentials',
						children: [
							{label:'Governance', value:'essentials value 1'},
							{label:'Ownership', value:'essentials value 2'},
							{label:'Cooperative best practices', value:'essentials value 3'},
							{label:'Diversity and inclusion', value:'essentials value 4'},
							{label:'Bylaws', value:'essentials value 5'},
						]
					},
					{
						label: 'Business operations',
						children: [
							{label:'Human resources', value:'operations value 1'},
							{label:'Marketing', value:'operations value 2'},
							{label:'Social media', value:'operations value 3'},
							{label:'Incorporation', value:'operations value 4'},
							{label:'Business model', value:'operations value 5'},
							{label:'Income, benefits, and compensation', value:'operations value 6'}
						]
					},
					{
						label: 'Technology & Platforms',
						children: [
							{label:'Software development', value:'tech value 1'},
							{label:'Platforms', value:'tech value 2'},
							{label:'Design', value:'tech value 3'},
							{label:'Free software', value:'tech value 4'},
							{label:'Data', value:'tech value 5'},
							{label:'Algorithms', value:'tech value 6'},
							{label:'Automation', value:'tech value 7'},
							{label:'Blockchain', value:'tech value 8'},
							{label:'Search engines', value:'tech value 9'}
						]
					},
					{
						label: 'Law & Policy',
						children: [
							{label:'Anti-trust', value:'law value 1'},
							{label:'Labor law', value:'law value 2'},
							{label:'Policy', value:'law value 3'},
							{label:'Co-op law', value:'law value 4'}
						]
					},
					{
						label: 'Fair labour',
						children: [
							{label:'Unions', value:'labour value 1'},
							{label:'Workplace safety', value:'labour value 2'},
							{label:'Social security', value:'labour value 3'},
						]
					},
					{
						label: 'Platform co-op theory',
						children: [
							{label:'Platform cooperativism', value:'theory value 1'},
							{label:'Platform capitalism', value:'theory value 2'},
							{label:'Gig economy', value:'theory value 3'},
							{label:'Sharing economy', value:'theory value 4'},
							{label:'Solidarity economy', value:'theory value 5'},
							{label:'Information economy', value:'theory value 6'},
							{label:'Peer-to-peer', value:'theory value 7'}
						]
					},
				]
			},
			{
				label: 'Formats',
				terms: [
					{label: 'Academic Paper'},
					{label: 'Article'},
					{label: 'Audio'},
					{label: 'Book'},
					{label: 'Case Study'},
					{label: 'Educational Curriculum'},
					{label: 'Online Training'},
					{label: 'Podcast'},
					{label: 'Presentation Slides'},
					{label: 'Report'},
					{label: 'Toolkit'},
					{label: 'Video'}
				]
			},
			{
				label: 'Sectors',
				terms: [
					{
						label:'Agriculture'
					},
					{
						label:'Art, fashion, design'
					},
					{
						label:'Accounting and Finance'
					},
					{
						label:'Advertising and marketing'
					},
					{
						label:'Consulting'
					},
					{
						label:'Co-op development'
					},
					{
						label:'Community organizing'
					},
					{
						label:'Construction'
					},
					{
						label:'Environment'
					},
					{
						label:'Education'
					},
					{
						label:'Energy and mining'
					},
					{
						label:'Entertainment'
					},
					{
						label:'Food'
					},
					{
						label:'Healthcare'
					},
					{
						label:'Hospitality and tourism'
					},
					{
						label:'Legal'
					},
					{
						label:'Manufacturing'
					},
					{
						label:'Media and communications'
					},
					{
						label:'Maintenance and repair'
					},
					{
						label:'Protective services and defense'
					},
					{
						label:'Personal care and services'
					},
					{
						label:'Public and social services'
					},
					{
						label:'Property and real estate'
					},
					{
						label:'Recycling and waste management'
					},
					{
						label:'Sales and retail'
					},
					{
						label:'Science and engineering'
					},
					{
						label:'Sports fitness and recreation'
					},
					{
						label:'Technology',
						children: [
							{label:'Electronics and computer manufacturing', value:'sector tech value 1'},
							{label:'Software and hardware enginereeing', value:'sector tech value 2'},
							{label:'Web service providers', value:'sector tech value 3'},
							{label:'Data processing', value:'sector tech value 4'},
							{label:'Misc technology', value:'sector tech value 5'}
						]
					},
					{
						label:'Transportation and logistics'
					},
					{
						label:'Translation'
					},
					{
						label:'Utilities'
					}
				]
			},
		],
		cards: resourceData,
		foundPosts: 12
	},
	variants: [
		{
			name: 'Unfiltered',
			label: 'Unfiltered',
			context:
			{
				bodyClass: 'archive post-type-archive',
				foundPosts: false,
				currentTags: false
			}
		}
	]
};
