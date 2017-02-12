
var webpack = require('webpack');

//var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {

    entry: {

        index:'src/entry/index.js',

        about:'src/entry/about.js'

    },

    output: {

        path: './src/js/',

        filename: '[name].bundle.js',

        chunkFilename: "[name].chunk.js",

        publicPath:'./src/js/'

    },

    module: {

        //加载器配置
        loaders: [

            { test: /\.css$/, loader: 'style-loader!css-loader' },

            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

            //{test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},

            //{ test: /\.js$/, loader: 'jsx-loader?harmony' },

            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},

            //{ test: /\.js$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' }
        ]

    },

    plugins: [
        //jquery 全局依赖
        new webpack.ProvidePlugin({

            $: 'jquery',

            jQuery: "jquery",

            'window.jQuery': "jquery",

            //Vue:'vue'

        }),

        //new ExtractTextPlugin("[name].css")   //css提取
        //new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js')//这是妮第三方库打包生成的文件

    ],

    resolve: {

         //查找module的话从这里开始查找
         root: 'D:/web/demo', //绝对路径

         //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
         extensions: ['', '.js', '.json', '.scss'],

         //模块别名定义，方便后续直接引用别名，无须多写长长的地址
         alias: {

             AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore')

             ActionType : 'js/actions/ActionType.js',

             AppAction : 'js/actions/AppAction.js'

         }

     }

};
