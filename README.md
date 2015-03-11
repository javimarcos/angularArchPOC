1. bower global instalation
    npm install -g bower
2. Creation of .bowerrc manifest file to indicate
    the folder to store dependencies
3. Add to .gitignore common folders and files to be ignored
4. Add bower dependencies
   bower install --save-dev --save requirejs
   bower install --save-dev --save angularjs
5. index.html creation to include 
    lib/requirejs/require.js
    src/require_config.js
7. shim angularjs in require
8. creacion de app
9. To add lazyloading properties the necesary steps
  is necesary to set an strategy based on the $onRouteChangeStart event to do an specific require call
