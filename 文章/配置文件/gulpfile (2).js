var
    gulp = require('gulp'),

    less = require('gulp-less'),                        //less编译

    autoprefixer = require('gulp-autoprefixer'),        //自动前缀

    cssmin = require('gulp-minify-css'),                //css压缩


    uglify = require('gulp-uglify'),                    //js压缩

    concat = require('gulp-concat'),                    //js合并

    notify = require('gulp-notify'),                    //编译提示

    watch = require('gulp-watch'),                      //变动监听


    cache = require('gulp-cache'),                      //图片缓存压缩

    rename = require('gulp-rename'),                    //更改名称

    append = require('gulp-rev-append');                //增加版本号


var src = 'src/';

var name = '';

//样式
gulp.task('style', function () {

    return  gulp.src(src + 'less/**/'+name+'.less')

        .pipe(less())

        .pipe(autoprefixer())

        //.pipe(cssmin())

        .pipe(gulp.dest(src + 'css/'))

        .pipe(notify({ message: 'Css编译完成' }));

});


//监听样式变动
gulp.task('style-watch', function() {

    gulp.watch(src + 'less/**/*.less',function(event){

        var str = event.path;

            //str = str.match(/less\\+(.+)/)[1];

            //url = str.replace(/\\/,'/');

            str = str.match(/less\\(.+)\.less$/)[1];

            name = str.replace(/\\/,'/');

        gulp.start('style');

    });
});



//全局样式
gulp.task('all-style', function () {

    return  gulp.src(src + 'less/**/*.less')

        .pipe(less())

        .pipe(autoprefixer())

        //.pipe(cssmin())

        .pipe(gulp.dest(src + 'css/'))

        .pipe(notify({ message: 'Css编译完成' }));

});