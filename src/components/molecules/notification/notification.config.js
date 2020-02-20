const faker = require( 'faker' );

module.exports = {
	title: 'Notification',
	status: 'wip',
	order: 10,
	context: {
		icon: 'info',
		title: 'Notification',
		content: faker.lorem.sentences( 3 ),
		standAlone: false,
		bodyClass: 'has-off-white-background-color'
	},
	variants: [
		{
			name: 'Error',
			context: {
				modifier: 'error',
				icon: 'error',
				title: 'Error',
				content: 'You have reached the maximum amount of 25 saved searches. To save more, you must delete some saved searches in your saved searches page.'
			}
		},
		{
			name: 'Warning',
			context: {
				modifier: 'warning',
				icon: 'warning',
				title: 'Warning',
				content: 'You last picked topics and goals you’re interested in over a year ago. Do you want to <a href="/update">update your topics and goals</a>?'
			}
		},
		{
			name: 'Success',
			context: {
				modifier: 'success',
				icon: 'success',
				title: 'Success',
				content: 'You have successfully saved this search. You can save 24 more. You can see this search in your <a href="/saved-searches">saved searches page</a>.'
			}
		}
	]
};
