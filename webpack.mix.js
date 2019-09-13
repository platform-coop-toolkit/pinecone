const mix = require('laravel-mix');

mix.setPublicPath('public')
   .postCss('src/assets/styles/pinecone.css', 'public/styles/pinecone.css')
   .js('src/assets/scripts/pinecone.js', 'public/scripts/pinecone.js');
