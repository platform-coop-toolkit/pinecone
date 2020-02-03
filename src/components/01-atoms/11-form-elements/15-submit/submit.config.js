module.exports = {
	title: 'Submit Button',
	label: 'Submit Button',
	status: 'wip',
	context: {
		label: 'Submit',
		id: 'submit',
		icon: false,
		modifiers: false,
		type: 'submit',
		standAlone: false
	},
	'variants': [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				modifiers: ['inverse'],
				bodyClass: 'has-blue-500-background-color'
			}
		}
	]
};
