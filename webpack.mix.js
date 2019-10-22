const mix = require( 'laravel-mix' );

mix.setPublicPath( 'public' )
	.sass( 'src/assets/styles/pinecone.scss', 'public/styles/' )
	.js( 'src/assets/scripts/pinecone.js', 'public/scripts/pinecone.js' );
