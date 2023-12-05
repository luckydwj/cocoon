const webpack = require("webpack");
const config = require("../config/webpack.dev");
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(config);
const devServerOptions = { ...config.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
    console.log('Successfully started server on http://localhost:8080');
});
