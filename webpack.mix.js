const mix = require( 'laravel-mix' );
require( 'laravel-mix-postcss-config' );

mix.setPublicPath( 'public' )
	.postCss( 'src/assets/styles/pinecone.css', 'public/styles/pinecone.css' )
	.postCssConfig()
	.js( 'src/assets/scripts/pinecone.js', 'public/scripts/pinecone.js' );
