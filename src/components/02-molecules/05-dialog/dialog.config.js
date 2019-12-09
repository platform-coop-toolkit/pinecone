const faker = require( 'faker' );

module.exports = {
	title: 'Dialog',
	status: 'wip',
	context: {
		dialogTitle: 'Dialog',
		dialogContent: faker.lorem.paragraphs( 1 ),
		scriptCall: 'window.pinecone.dialogs()'
	}
};
