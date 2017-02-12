var
    gulp = require('gulp'),                             //本地安装gulp所用到的地方

    less = require('gulp-less'),                        //less编译

    autoprefixer = require('gulp-autoprefixer'),        //自动前缀

    minify = require('gulp-minify-css'),                //css压缩

    jshint = require('gulp-jshint'),                    //语法检查

    uglify = require('gulp-uglify'),                    //js压缩

    concat = require('gulp-concat'),                    //js合并

    notify = require('gulp-notify'),                    //编译提示

    watch = require('gulp-watch'),                      //变动监听

    imagemin = require('gulp-imagemin'),                //图片压缩

    pngquant = require('imagemin-pngquant'),            //png图片

    cache = require('gulp-cache'),                      //图片缓存压缩

    rename = require('gulp-rename'),                    //更改名称

    append = require('gulp-rev-append'),                //增加版本号


    /*****gulp-webpack配置*****/

    _webpack = require('webpack'),                      //载入webpack jq全局自动依赖

    webpack = require('gulp-webpack'),                  //gulp-webpack  模块建立打包

    ExtractTextPlugin = require("extract-text-webpack-plugin");


/*-----------------------------demo演示-------------------------------*/

    //样式
    gulp.task('demo-style', function () {

        return  gulp.src('demo/source/less/*.less')

            .pipe(less())

            .pipe(autoprefixer())

            .pipe(cssmin({

                advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]

                compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]

                keepBreaks: true//类型：Boolean 默认：false [是否保留换行]

            }))

            .pipe(gulp.dest('demo/src/css/'))

            .pipe(notify({ message: 'Css编译完成' }));

    });


    //脚本
    gulp.task('demo-script', function() {

        return gulp.src('demo/source/js/*.js')

            .pipe(jshint())

            .pipe(jshint.reporter('default'))

            //.pipe(concat('all.js'))

            //.pipe(gulp.dest('demo/src/js'))

            .pipe(rename({ suffix: '.min' }))

            .pipe(uglify())

            .pipe(gulp.dest('demo/src/js/'))

            .pipe(notify({ message: '脚本压缩完成' }));

    });

    //监听样式变动
    gulp.task('demo-watch1', function() {

        gulp.watch('demo/source/less/*.less', ['demo-style']);

    });


    //监听js变动
    gulp.task('demo-watch2', function() {

        gulp.watch('demo/source/js/*.js', ['demo-script']);

    });



/*----------------------------webpack项目演示-------------------------------*/

    //样式
    gulp.task('h3', function () {

        return gulp.src('demo/source/less/*.less')

            .pipe(less())

            .pipe(autoprefixer())

            .pipe(gulp.dest('demo/src/css/'))

            .pipe(notify({ message: 'Css编译完成' }));

    });

    //gulp-webpack
    gulp.task('h4',['h3'],function(){

        gulp.src('demo/src/entry/index.js')

            .pipe(webpack({

                entry: {

                    index:'./demo/src/entry/index.js',

                    about:'./demo/src/entry/about.js'

                },

                output: {

                    filename: '[name].bundle.js',

                    chunkFilename: "[name].chunk.js",

                    publicPath:'./src/js/'

                    //path: 'demo/2webpack/src/js/'

                },

                module: {

                    loaders: [

                        { test: /\.css$/, loader: 'style-loader!css-loader' },

                        //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

                        //{test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},

                        //{ test: /\.js$/, loader: 'jsx-loader?harmony' },

                        //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},


                    ]

                },

                plugins: [

                    new _webpack.ProvidePlugin({

                        $: 'jquery',

                        jQuery: "jquery",

                        "window.jQuery": "jquery",

                        //Vue:'vue'

                    }),

                    //new ExtractTextPlugin("[name].css"),   //css提取

                    //new _webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js')

                ]


            }))

            //.pipe(uglify())

            .pipe(gulp.dest('demo/src/js/'))

            .pipe(notify({ message: 'webpack已打包' }));

    });

    //监听样式变动
    gulp.task('h1', function() {

        gulp.watch('demo/source/less/*.less', ['h3','h4']);

    });

    //监听js变动
    gulp.task('h2', function() {

        gulp.watch('demo/src/js/*.js', ['h4']);

    });


/*****************************图片&版本*******************************/

    //图片
    gulp.task('demo-img', function() {

        return gulp.src('demo/source/img/*.png')

            .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true})))

            .pipe(gulp.dest('demo/img'))

            .pipe(notify({ message: '图片压缩完成' }));

    });

    //版本号
    gulp.task('demo-rev', function () {

        gulp.src('demo/*.html')

            .pipe(append())

            .pipe(gulp.dest('demo/'))

            .pipe(notify({ message: '版本已更改' }));

    });
