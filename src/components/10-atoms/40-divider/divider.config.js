module.exports = {
	status: 'ready',
	title: 'Dividers',
	context: {
		dividers: [
			{
				name: 'Default',
			}
		]
	},
	variants: [
		{
			name: 'Grey 400 Hairline',
			context: {
				class: 'is-style-hairline has-grey-400-background-color'
			},
		},
		{
			name: 'Grey 200 Thick',
			context: {
				class: 'is-style-thick has-grey-200-background-color'
			}
		},
		{
			name: 'Blue 500 Hairline',
			context: {
				class: 'is-style-hairline has-blue-500-background-color'
			}
		},
		{
			name: 'Blue 500 Medium',
			context: {
				class: 'is-style-medium has-blue-500-background-color'
			}
		},
		{
			name: 'Blue 600 Hairline',
			context: {
				class: 'is-style-hairline has-blue-600-background-color'
			}
		},
		{
			name: 'Dark Mint 500 Hairline',
			context: {
				class: 'is-style-hairline has-dark-mint-500-background-color'

			}
		}
	]
};
