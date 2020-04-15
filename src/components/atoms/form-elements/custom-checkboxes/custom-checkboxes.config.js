module.exports = {
	title: 'Custom Checkboxes',
	status: 'wip',
  standAlone: 'false',
	order: 7,
	context: {
		label: 'Nested Checkboxes',
		items: [
			{
				label: 'Parent item 1',
				children: [
					'Sub item 1',
					'Sub item 2',
					'Sub item 3'
				]
			}
    ]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				inverse: true,
				modifiers: ['inverse']
			}
		}
	]
};
