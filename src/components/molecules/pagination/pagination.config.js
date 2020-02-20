module.exports = {
	title: 'Pagination',
	status: 'wip',
	order: 13,
	context: {
		contentType: 'resources',
		perPage: 10
	},
	variants: [
		{
			name: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
