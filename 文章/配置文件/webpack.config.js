
var webpack = require('webpack');

var html = require('html-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');

module.exports = {

    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

    entry: {

        index:path.resolve(__dirname,'./src/entry/e1.js'),

        about:path.resolve(__dirname,'./src/entry/e2.js')
    },

    output: {

        path: './src/js/',

        filename: '[name].bundle.js',

        chunkFilename: "[name].chunk.js",

        publicPath:'http://localhost:63342/webpack/dist/'

    },

    module: {

        loaders: [

            { test: /\.css$/, loader: 'style-loader!css-loader' },

            /*{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader",use: ["css-loader","postcss-loader"]})
            },*/

            //{ test: /\.js$/, loader: 'babel-loader', exclude:'./node_modules', include:'./src',},

            //{ test: /\.html$/, loader: 'html-loader'},

            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

            /*{
                test: /\.(png|jpg|gif|)$/i,

                loaders:[

                    'url-loader?limit=10000&name=img/[name]-[hash:5].[ext]',

                    'image-webpack-loader'
                ]
            },*/

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


        //new webpack.optimize.CommonsChunkPlugin({

            //name，给这个包含公共代码的chunk命个名（唯一标识）。
            //filename，如何命名打包后生产的js文件，也是可以用上[name]、[hash]、[chunkhash]这些变量。
            //minChunks，公共代码的判断标准：某个js模块被多少个chunk加载了才算是公共代码。
            //chunks，表示需要在哪些chunk（也可以理解为webpack配置中entry的每一项）里寻找公共代码进行打包。不设置此参数则默认提取范围为所有的chunk。

        //})


        //webpack-dev-server
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),

        new html({

            template:'./template/index.html',

            filename:'index.html',

            inject:'body',

            title:'这是一个title',

            chunks:['e1'],

            /*minify:{

             removeComments:true,

             collapseWhitespace:true
             }*/

            //排除
            //excludeChunks:[]

        }),

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
     },


};

//**********基本***************
//上下文指向根目录
//__dirname 指向当前脚本所在的目录
//入口出口 chunk chunkhash参数


//**********loader***************
//test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
//loader：loader的名称（必须）
//include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
//query：为loaders提供额外的设置选项（可选）
//loaders从后往前********


//**********基本命令***************
//npm run "name" 脚本
//webpack 最基本的启动webpack命令
//webpack -w 提供watch方法，实时进行打包更新
//webpack -p 对打包后的文件进行压缩
//webpack -d 提供SourceMaps，方便调试  ***
//webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
//webpack --profile 输出性能数据，可以看到每一步的耗时
//webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
//webpack --display-error-details --progress

//**********插件模块***************
/**
css-loader style-loader less-loader less 
babel-loader babel-preset-latest 
postcss-loader(前缀) autoprefixer 
url-loader image-webpack-loader(图片压缩) html-loader(模板加载)
extract-text-webpack-plugin(css提取)
vue-loader vue vue-template-compiler
版本 html-webpack-plugin
服务器模块webpack-dev-server
copy-webpack-plugin
**/





//***************其他******************
/*<% for(var key in htmlWebpackPlugin.files){ %>

    <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %> <br/>

<% } %>

<br/>
<% for(var key in htmlWebpackPlugin.options){ %>

<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.options[key]) %> <br/>

<% } %>*/

//绝对地址
//exclude:path.resolve(__dirname,'node_modules'),

//include:path.resolve(__dirname,'src'),

//css-loader?importLoaders=1

//${require()}  模板图片引用

/*require.ensure(['./../js/module2.html'], function(require){

    require('./../js/module3.js');
    
})*/


/**
  "babel": {
    "presets": [
      "es2015"
    ]
  },

  "hot":"webpack-dev-server --content-base ./dist"
**/