module.exports = {
	title: 'Menu Button',
	status: 'wip',
	context: {
		standAlone: false,
		label: 'Sort by',
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
	}
};
