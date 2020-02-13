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
		type: 'button',
		standAlone: false
	},
	variants: [
		{
			name: 'inverse',
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
			name: 'Destructive Borderless',
			context: {
				modifiers: ['borderless', 'destructive']
			}
		},
		{
			name: 'Destructive Borderless Inverse',
			label: 'Destructive Borderless (Inverse)',
			context: {
				modifiers: ['borderless', 'destructive', 'inverse'],
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
		},
		{
			name: 'Tag Button',
			label: 'Tag Button',
			context: {
				id: false,
				label: '<span class="screen-reader-text">Remove </span>Blockchain<span class="screen-reader-text"> from current filters</span>',
				modifiers: ['tag-button'],
				icon: 'close',
				iconPosition: 'end',
			}
		}
	]
};
