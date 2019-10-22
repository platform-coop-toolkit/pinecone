'use strict';

/*
* Require the path module
*/
const path = require( 'path' );

/*
 * Require the Fractal module
 */
const fractal = module.exports = require( '@frctl/fractal' ).create();
/*
 * Give your project a title.
 */
fractal.set( 'project.title', 'Pinecone' );
fractal.set( 'project.version', 'v1.0.0-dev' );
fractal.set( 'project.author', 'OCAD University' );

/*
 * Tell Fractal where to look for components.
 */
fractal.components.engine( '@frctl/nunjucks' );
fractal.components.set( 'ext', '.njk' );
fractal.components.set( 'path', path.join( __dirname, 'src/components' ) );

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set( 'path', path.join( __dirname, 'src/docs' ) );

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set( 'static.path', path.join( __dirname, 'public' ) );

/*
 * Tell the Fractal where static HTML exports should be generated.
 */
fractal.web.set( 'builder.dest', `${__dirname  }/build` );
