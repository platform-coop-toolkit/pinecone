module.exports = {
	title: 'Button',
	status: 'wip',
	context: {
		label: 'Filter',
		labelVisuallyHidden: false,
		className: false,
		icon: 'filter',
		iconPosition: 'start',
		id: 'button',
		standAlone: false
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				modifiers: ['inverse'],
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'Secondary',
			context: {
				modifiers: ['secondary']
			}
		},
		{
			name: 'Secondary Inverse',
			label: 'Secondary (Inverse)',
			context: {
				modifiers: ['secondary', 'inverse'],
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'Borderless',
			context: {
				modifiers: ['borderless']
			}
		},
		{
			name: 'Borderless Inverse',
			label: 'Borderless (Inverse)',
			context: {
				modifiers: ['borderless', 'inverse'],
				bodyClass: 'has-blue-500-background-color'
			}
		},
		{
			name: 'Disc',
			label: 'Disc',
			context: {
				modifiers: ['disc'],
				icon: 'chevron-down',
				labelVisuallyHidden: true,
			}
		},
		{
			name: 'Disc Inverse',
			label: 'Disc (Inverse)',
			context: {
				modifiers: ['disc', 'inverse'],
				bodyClass: 'has-blue-500-background-color',
				icon: 'chevron-down',
				labelVisuallyHidden: true,
			}
		}
	]
};
