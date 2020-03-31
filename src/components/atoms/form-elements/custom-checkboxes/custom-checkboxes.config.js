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
			},
			{
				label: 'Parent item 2',
				children: [
          'Sub item 4',
					'Sub item 5',
					'Sub item 6'
        ]
      },
      {
        label: 'Parent item 3 (disabled)',
        disabled: true,
        children: [
          'Sub item 7',
          'Sub item 8',
          'Sub item 9'
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
				inverse: true
			}
		}
	]
};
