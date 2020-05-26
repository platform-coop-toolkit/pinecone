const optionCount = 10;
const optionData = {};

for ( let i = 1; i <= optionCount; i++ ) {
	optionData[i] = `Option ${i}`;
}

module.exports = {
	title: 'Select',
	status: 'wip',
	context: {
		label: 'Select',
		name: 'select',
		description: 'Description for this select input.',
		errorMessage: 'Please make a selection.',
		disabled: false,
		options: optionData
	}
};
