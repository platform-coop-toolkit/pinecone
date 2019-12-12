module.exports = {
	title: 'Call to Action',
	status: 'wip',
	context: {
		href: 'https://example.com/call-to-action',
		label: 'Call to Action',
		standAlone: false
	},
	variants: [
		{
			name: 'Default with Icon',
			context: {
				hasIcon: true
			}
		},
		{
			name: 'Secondary',
			context: {
				class: 'is-style-secondary'
			}
		},
		{
			name: 'Secondary with Icon',
			context: {
				class: 'is-style-secondary',
				hasIcon: true
			}
		},
		{
			name: 'Off White',
			context: {
				class: 'is-style-off-white'
			}
		},
		{
			name: 'Off White with Icon',
			context: {
				class: 'is-style-off-white',
				hasIcon: true
			}
		},
		{
			name: 'White',
			context: {
				class: 'is-style-white'
			}
		},
		{
			name: 'White with Icon',
			context: {
				class: 'is-style-white',
				hasIcon: true
			}
		}
	]
};
