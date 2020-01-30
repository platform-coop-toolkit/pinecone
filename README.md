# Pinecone

[![Deployed with Netlify](https://badgen.net/badge/deployed/with%20netlify/cyan)](https://netlify.com) [![License](https://badgen.net/github/license/platform-coop-toolkit/pinecone)](https://github.com/platform-coop-toolkit/pinecone/blob/master/LICENSE.md) [![GitHub Release](https://badgen.net/github/release/platform-coop-toolkit/pinecone)](https://github.com/platform-coop-toolkit/pinecone/releases/latest)

Pinecone is a pattern library for the Platform Cooperative Development Kit.

## Development Quickstart

1. Clone Pinecone from [https://github.com/platform-coop-toolkit/pinecone/](https://github.com/platform-coop-toolkit/pinecone/).

2. Install dependencies: `npm i`

3. Start Fractal, Rollup and Webpack: `npm start`

4. Visit the local development site at (probably) [http://localhost:3000](https://rollupjs.org/).

## Implementation Details

Pinecone is built on three components:

1. [Fractal](https://fractal.build) and the Fractal [Nunjucks adapter](https://github.com/frctl/nunjucks), which handles the pattern library itself.

2. [Laravel Mix](https://laravel-mix.com), which handles Sass and JavaScript compilation.

3. [Rollup](https://rollupjs.org), which exports the Pinecone JavaScript library to CommonJS and ESM formats for ease of import into build systems (e.g. [Sage's](https://roots.io/sage) Webpack implementation).

Running the npm `start` command as above starts Fractal, Rollup and Laravel Mix in development mode with live reloading via [BrowserSync](https://www.browsersync.io/). Any changes you make will trigger a recompile (if necessary) and reload your browser.

## Building Pinecone

Pinecone is built and deployed automatically to [Netlify](https://netlify.com/). If for some reason you need to build your own production copy, `npm run build` will generate a static version of the pattern library in your `build` directory.

## Usage

### In a Django Project

1. Download a [release](https://github.com/platform-coop-toolkit/pinecone/releases) or `git clone` this repository.
2. Change directories and install dependencies: `npm install`
3. Build Pinecone: `npm run build`
4. Copy the contents of `./build/` to your project's static directory:

   `cp -r ./build/ /path/to/myproj/static/myproj/`

5. Add links to the JavaScript, stylesheet, and potentially the favicon somewhere in the head element of in your template, e.g., `./templates/myproj/index.html`
   ```
   <script src="{% static 'myproj/scripts/pinecone.umd.js' %}"></script>
   <link href="{% static 'myproj/styles/pinecone.css' %}" rel="stylesheet">
   <link rel="shortcut icon" href="{% static 'myproj/images/favicon.png' %}" type="image/x-icon">
   ```
6. This should be enough for local development. In production, these static files should be collected, e.g.,

   ```
   python manage.py collectstatic
   ```

TODO: Expand this section to other use cases.
