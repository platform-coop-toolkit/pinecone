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
		options: optionData,
		standAlone: false
	},
	variants: [
		{
			name: 'Disabled',
			context: {
				disabled: true
			}
		},
		{
			name: 'Default (Light on Dark)',
			label: 'Default (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color'
			}
		},
		{
			name: 'Disabled (Light on Dark)',
			label: 'Disabled (Light on Dark)',
			context: {
				bodyClass: 'has-dark-mint-500-background-color',
				disabled: true
			}
		}
	]
};
