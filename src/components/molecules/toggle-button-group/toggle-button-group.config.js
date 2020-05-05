module.exports = {
	title: 'Toggle Button Group',
	status: 'wip',
	order: 16,
	context: {
		label: 'Niches',
		buttons: [
			'Collaboration',
			'Communication',
			'Customer or member relations',
			'Decision making',
			'Developer tools',
			'Finance',
			'Marketing',
			'Time management'
		],
		buttonVariant: 'toggle-button'
	},
	variants: [
		{
			name: 'Inverse',
			label: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color',
				buttonVariant: 'toggle-button-inverse'
			}
		}
	]
};
