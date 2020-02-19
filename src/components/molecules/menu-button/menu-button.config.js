module.exports = {
	title: 'Menu Button',
	status: 'wip',
	order: 5,
	context: {
		standAlone: false,
		label: 'Sort by',
		icon: 'sort',
		items: [
			{
				href: '/?date-added',
				label: 'Date added',
				current: true
			},
			{
				href: '/?date-published',
				label: 'Date published'
			},
			{
				href: '/?most-favorited',
				label: 'Most favorited'
			}
		]
	},
	variants: [
		{
			name: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
