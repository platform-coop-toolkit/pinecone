module.exports = {
	title: 'Term List',
	status: 'wip',
	// order: 5,
	context: {
		bodyClass: 'page term-list topics',
		hasMenu: true,
		hasFooter: true,
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
			}
		]
	},
	variants: [
		{
			name: 'Topics',
			context: {
				bodyClass: 'page term-list topics',
				label: 'Topics'
			}
		},
		{
			name: 'Goals',
			context: {
				bodyClass: 'page term-list goals',
				label: 'Goals'
			}
		},
		{
			name: 'Sectors',
			context: {
				bodyClass: 'page term-list sectors',
				label: 'Sectors'
			}
		},
		{
			name: 'Coop Types',
			label: 'Co-op Types',
			context: {
				bodyClass: 'page term-list coop-types',
				label: 'Co-op Types',
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
			}
		},
		{
			name: 'Formats',
			context: {
				bodyClass: 'page term-list formats',
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
			}
		}
	]
};
