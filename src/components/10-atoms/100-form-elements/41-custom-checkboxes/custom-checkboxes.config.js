module.exports = {
	title: 'Custom Checkboxes',
	status: 'wip',
	standAlone: 'false',
	context: {
		label: 'Nested Checkboxes',
		items: [
			{
				label: 'Parent item 1 (initially unchecked)',
				children: [
					{ label: 'Sub item 1', value: 'sub item 1 value' },
					{ label: 'Sub item 2', value: 'sub item 2 value' },
					{ label: 'Sub item 3', value: 'sub item 3 value' }
				]
			},
			{
				label: 'Parent item 2 (initially mixed)',
				children: [
					{ label: 'Sub item 4', checked: true, value: 'sub item 4 value' },
					{ label: 'Sub item 5', value: 'sub item 5 value'},
					{ label: 'Sub item 6', checked: true, value: 'sub item 6 value' }
				]
			},
			{
				label: 'Parent item 3 (initially all checked)',
				children: [
					{ label: 'Sub item 7', checked: true, value: 'sub item 7 value' },
					{ label: 'Sub item 8', checked: true, value: 'sub item 8 value' },
					{ label: 'Sub item 9', checked: true, value: 'sub item 9 value' }
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
