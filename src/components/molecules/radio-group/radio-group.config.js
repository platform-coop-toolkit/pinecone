module.exports = {
	title: 'Radio Group',
	status: 'wip',
	order: 16,
	context: {
		label: 'Niches',
		buttons: [
			{
				label: 'All',
				checked: true
			},
			{
				label: 'Collaboration',
				checked: false
			},
			{
				label: 'Communication',
				checked: false
			},
			{
				label: 'Customer or member relations',
				checked: false
			},
			{
				label: 'Decision making',
				checked: false
			},
			{
				label: 'Developer tools',
				checked: false
			},
			{
				label: 'Finance',
				checked: false
			},
			{
				label: 'Marketing',
				checked: false
			},
			{
				label: 'Time management',
				checked: false
			}
		]
	},
	variants: [
		{
			name: 'Inverse',
			label: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
