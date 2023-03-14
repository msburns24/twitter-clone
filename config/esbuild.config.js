const path = require('path');

require("esbuild").build({
  entryPoints: ["application.js"],
  publicPath: "assets",
  bundle: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  loader: { 
    '.js': 'jsx',
    '.svg': 'file'
   },
  // custom plugins will be inserted is this array
  plugins: [],
}).catch(() => process.exit(1));

