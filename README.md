# gutenberg blocks tutorial

this repo aims to ease plugin development with Gutenberg Block editor from wordpress

## quick start

1) clonse repo
2) install dependencies by executing `npm install`
3) create javascript bundles with `npm run build`
4) move/symlink the src directory to your wordpress plugin directory
5) enable the plugin within wordpress
6) reload your editor.

## docker playground

Along with the tutorial code I provided you a docker based playground.

Running `make` installs wordpress and links the src directory inside the plugin dir. 
`docker-compose up -d` starts a webserver on port 3000. Enable the plugin and you are ready to go.

Open [http://localhost:3000](wordpress) and enable the plugin.

