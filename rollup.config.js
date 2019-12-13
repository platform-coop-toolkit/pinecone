import pkg from './package.json';

export default [
	// UMD (for browsers) build.
	{
		input: 'src/assets/scripts/Pinecone/index.js',
		output: {
			name: 'Pinecone',
			file: pkg.browser,
			format: 'umd',
		}
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'src/assets/scripts/Pinecone/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		],
	},
];
