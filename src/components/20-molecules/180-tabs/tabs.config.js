module.exports = {
	title: 'Tabs',
	status: 'wip',
	context: {
		label: 'tab group',
		tabs: [
			{
				title: 'Tab 1',
				content: 'Tab one content.',
				selected: true
			},
			{
				title: 'Tab 2',
				content: 'Tab two content.',
				selected: false
			},
			{
				title: 'Tab 3',
				content: 'Tab three content.',
				selected: false
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
