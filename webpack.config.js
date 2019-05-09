const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
	target: 'web',
	entry: path.join(__dirname, 'src/main.js'),
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.join(__dirname, 'build')
	},
	resolve: {
	    extensions: ['.js', '.vue', '.json'],
	    alias: {
	      'vue$': 'vue/dist/vue.js',
	      '@': path.resolve(__dirname, 'src'),
	      '@css': path.resolve(__dirname, 'src', 'assets', 'css'),
	      '@imgs': path.resolve(__dirname, 'src', 'assets', 'imgs')
	    }
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					postcss: [
	                  require('autoprefixer')(),
	                  require('postcss-cssnext')(),
	                  require('cssnano')()
	                ]
				}
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024,
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader' 
			},
			{
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name: path.posix.join('fonts/[name].[hash:7].[ext]')
		        }
		     }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
		new HTMLPlugin({
			filename: 'index.html',
		    template: 'index.html',
		    inject: true
		})
	]
};

//如果是开发环境
if(isDev){
	config.module.rules.push(
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				{
	              loader: 'postcss-loader',
	              options: {
	                ident: 'postcss',
	                plugins: [
	                  require('autoprefixer')(),
	                  require('postcss-cssnext')(),
	                  require('cssnano')()
	                ]
	              }
	            }
			]
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
	              loader: 'postcss-loader',
	              options: {
	                ident: 'postcss',
	                plugins: [
	                  require('autoprefixer')(),
	                  require('postcss-cssnext')(),
	                  require('cssnano')()
	                ]
	              }
	            },
				'sass-loader'
			]
		}
	);
	config.devtool = '#cheap-module-eval-source-map';
	config.devServer = {
		port: 8000,
		//host: '0.0.0.0',
		overlay: {
			errors: true
		},
		hot: true,
		open: true //设置为true当启动 npm run dev 时会自动打开浏览器
	};
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
}else{ //如果是生产环境
	config.entry = {
		app: path.join(__dirname, 'src/main.js'),
		vendor: ['vue']
	};
	config.optimization = {
		runtimeChunk: {
	  		name: 'manifest'
	  	},
		splitChunks: {
			cacheGroups: {
				commons: {
	                test: /[\\/]node_modules[\\/]/,
	                name: "vendor",
	                chunks: "all"
	            }
			}
	  	}
	};
	config.output.filename = '[name].[chunkhash:8].js';
	config.module.rules.push(
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
        　　	"css-loader",
				{
	              loader: 'postcss-loader',
	              options: {
	                ident: 'postcss',
	                plugins: [
	                  require('autoprefixer')(),
	                  require('postcss-cssnext')(),
	                  require('cssnano')()
	                ]
	              }
	            }
			]
		},
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
        　　	"css-loader",
				{
	              loader: 'postcss-loader',
	              options: {
	                ident: 'postcss',
	                plugins: [
	                  require('autoprefixer')(),
	                  require('postcss-cssnext')(),
	                  require('cssnano')()
	                ]
	              }
	            },
	 			"sass-loader"
			]
		}
	);
	config.plugins.push(
		new MiniCssExtractPlugin({
      　　filename: "[name].[chunkhash:8].css"
   　　 }),
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
		          warnings: false,
		          drop_debugger: true,
		          drop_console: true
		        }
			}
	    }),
		new CleanPlugin(
			[
				'build/*.*.js',
				'build/*.*.css'
			],
			{
			    verbose: true,
			    dry: false,
			}
		)
	)
};

module.exports = config;