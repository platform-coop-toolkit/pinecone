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
				modifier: 'inverse',
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
