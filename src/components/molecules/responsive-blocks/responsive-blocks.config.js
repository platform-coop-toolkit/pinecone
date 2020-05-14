module.exports = {
	title: 'Responsive Blocks',
	status: 'wip',
	order: 17,
	context: {
		divider: true,
		dividerText: 'or'
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
