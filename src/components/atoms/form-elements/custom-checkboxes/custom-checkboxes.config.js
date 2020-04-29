module.exports = {
	title: 'Custom Checkboxes',
	status: 'wip',
  standAlone: 'false',
	order: 7,
	context: {
		label: 'Nested Checkboxes',
		items: [
			{
				label: 'Parent item 1 (initially unchecked)',
				children: [
					{ label: 'Sub item 1' },
					{ label: 'Sub item 2' },
					{ label: 'Sub item 3' }
				]
			},
			{
				label: 'Parent item 2 (initially mixed)',
				children: [
					{ label: 'Sub item 4', checked: true },
					{ label: 'Sub item 5'},
					{ label: 'Sub item 6', checked: true }
				]
			},
			{
				label: 'Parent item 3 (initially all checked)',
				children: [
					{ label: 'Sub item 7', checked: true },
					{ label: 'Sub item 8', checked: true },
					{ label: 'Sub item 9', checked: true }
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
