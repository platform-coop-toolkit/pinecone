module.exports = {
	title: 'Submit Button',
	label: 'Submit Button',
	status: 'wip',
	order: 6,
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
				bodyClass: 'has-dark-mint-500-background-color'
			}
		}
	]
};
