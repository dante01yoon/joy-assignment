const path = require('path'); 
module.exports = {
  mode: 'development',

  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  devServer: {
  },
  resolve: {
		modules: [
			path.resolve(__dirname, './src'),
			'node_modules'
		],
    extensions: [".ts", ".tsx", '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
	},
	devServer: {
		contentBase: './src',  //index.html 이 프로젝트 최상단에 있다. 
  	publicPath: '/dist', //정적 파일을 제공하는 폴더
		inline: true,
		hot: true,
		host: "localhost",
		port: 4000,
	}
};