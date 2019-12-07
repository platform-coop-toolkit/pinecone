const faker = require( 'faker' );

const checkboxCount = 4;
const checkboxData = [];

for ( let i = 0; i < checkboxCount; i++ ) {
	checkboxData.push( {
		name: 'region',
		value: faker.address.countryCode(),
		label: faker.address.country(),
		checked: faker.random.boolean(),
		disabled: faker.random.boolean()
	} );
}

module.exports = {
	title: 'Checkbox',
	status: 'wip',
	context: {
		title: 'Checkbox',
		checkboxes: checkboxData
	},
	variants: [
		{
			name: 'Light on Dark',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
