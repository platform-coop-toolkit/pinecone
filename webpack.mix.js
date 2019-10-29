const mix = require( 'laravel-mix' );

mix.setPublicPath( 'public' )
	.copyDirectory( 'src/assets/images', 'public/images/' )
	.copy( 'src/assets/styles/mandelbrot.css', 'public/styles/' )
	.sass( 'src/assets/styles/pinecone.scss', 'public/styles/' )
	.js( 'src/assets/scripts/pinecone.js', 'public/scripts/pinecone.js' );
