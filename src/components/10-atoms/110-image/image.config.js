module.exports = {
	title: 'Image',
	status: 'ready',
	context: {
		src: '/images/person.jpg',
		width: 367,
		height: 250,
		alt: 'Photograph of Trebor Scholz',
		role: false
	},
	variants: [
		{
			name: 'Decorative',
			context: {
				alt: '',
				role: 'presentation'
			}
		},
		{
			name: 'Missing Alternative Text',
			context: {
				alt: false
			}
		}
	]
};
