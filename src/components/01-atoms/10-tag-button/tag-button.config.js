const faker = require( 'faker' );
const title = require( 'title' );

module.exports = {
	title: 'Tag Button',
	status: 'wip',
	context: {
		label: title( faker.lorem.words( 2 ) ),
		standAlone: false
	}
};
