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
	} );
}

module.exports = {
	title: 'Archive',
	status: 'wip',
	order: 4,
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
							'Write bylaws',
							'Build a business model',
							'Establish a governance structure',
							'Incorporate a co-op',
							'Build a marketing plan',
							'Pick a co-op type',
							'Make decisions collaboratively'
						]
					},
					{
						label: 'Build a platform',
						children: [
							'Understand the design process',
							'Design for privacy',
							'Design for inclusion',
							'Build accessible digital tools',
							'Build open source software'
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
							'Governance',
							'Ownership',
							'Cooperative best practices',
							'Diversity and inclusion',
							'Bylaws',
						]
					},
					{
						label: 'Business operations',
						children: [
							'Human resources',
							'Marketing',
							'Social media',
							'Incorporation',
							'Business model',
							'Income, benefits, and compensation'
						]
					},
					{
						label: 'Technology & Platforms',
						children: [
							'Software development',
							'Platforms',
							'Design',
							'Free software',
							'Data',
							'Algorithms',
							'Automation',
							'Blockchain',
							'Search engines'
						]
					},
					{
						label: 'Law & Policy',
						children: [
							'Anti-trust',
							'Labor law',
							'Policy',
							'Co-op law'
						]
					},
					{
						label: 'Fair labour',
						children: [
							'Unions',
							'Workplace safety',
							'Social security',
						]
					},
					{
						label: 'Platform co-op theory',
						children: [
							'Platform cooperativism',
							'Platform capitalism',
							'Gig economy',
							'Sharing economy',
							'Solidarity economy',
							'Information economy',
							'Peer-to-peer'
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
							'Electronics and computer manufacturing',
							'Software and hardware enginereeing',
							'Web service providers',
							'Data processing',
							'Misc technology'
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
