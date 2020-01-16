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
			name: 'Default (Inverse)',
			label: 'Default (Inverse)',
			context: {
				modifiers: ['inverse'],
				bodyClass: 'has-dark-mint-500-background-color'
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
			name: 'Disc (Inverse)',
			label: 'Disc (Inverse)',
			context: {
				modifiers: ['disc', 'inverse'],
				bodyClass: 'has-dark-mint-500-background-color',
				icon: 'chevron-down',
				labelVisuallyHidden: true,
			}
		}
	]
};
