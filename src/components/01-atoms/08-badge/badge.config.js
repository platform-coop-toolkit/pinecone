const faker = require( 'faker' );
const title = require( 'title' );

module.exports = {
	title: 'Badge',
	status: 'wip',
	context: {
		label: title( faker.lorem.words( 3 ) ),
		standAlone: false
	}
};
