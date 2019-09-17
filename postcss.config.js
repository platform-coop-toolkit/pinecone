module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-partial-import': {},
		'postcss-custom-media': {},
		'postcss-custom-properties': {
			importFrom: './src/assets/styles/common/_properties.css',
			preserve: false,
		},
		'postcss-calc': {},
		'postcss-nested': {},
		autoprefixer: true
	}
};
