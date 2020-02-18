# Using Pinecone in a Django Project

1. Download a [release](https://github.com/platform-coop-toolkit/pinecone/releases) or `git clone` this repository.
2. Change directories and install dependencies: `npm install`
3. Build Pinecone: `npm run build`
4. Copy the contents of `./build/` to your project's static directory:

   ```bash
   cp -r ./build/ /path/to/myproj/static/myproj/
   ```

5. Add links to the JavaScript, stylesheet, and potentially the favicon somewhere in the head element of in your template, e.g., `./templates/myproj/index.html`

   ```html
   <script src="{% static 'myproj/scripts/pinecone.umd.js' %}"></script>
   <link href="{% static 'myproj/styles/pinecone.css' %}" rel="stylesheet">
   <link rel="shortcut icon" href="{% static 'myproj/images/favicon.png' %}" type="image/x-icon">
   ```

6. This should be enough for local development. In production, these static files should be collected, e.g.,

   ```bash
   python manage.py collectstatic
   ```
