const slugify = require( 'slugify' );

const terms = [
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
];

terms.forEach( term => {
	const name = slugify( term.label, { lower: true } );
	term.children = term.children.map( child => {
		return {
			value: slugify( child, { lower: true } ),
			label: child,
			name
		};
	} );
} );

module.exports = {
	name: 'Filter List',
	status: 'wip',
	context: {
		label: 'Topics',
		terms,
		standAlone: false,
	}
};
