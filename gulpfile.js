var
    gulp = require('gulp'),                             //本地安装gulp所用到的地方

    less = require('gulp-less'),                        //less编译

    autoprefixer = require('gulp-autoprefixer'),        //自动前缀

    minify = require('gulp-minify-css'),                //css压缩

    uglify = require('gulp-uglify'),                    //js压缩

    concat = require('gulp-concat'),                    //js合并

    notify = require('gulp-notify'),                    //编译提示

    watch = require('gulp-watch'),                      //变动监听

    rename = require('gulp-rename'),                    //更改名称

    append = require('gulp-rev-append');                //增加版本号

//原生组件
gulp.task('com', function () {

    return  gulp.src('组件示例/**/*.less')

        .pipe(less())

        .pipe(autoprefixer())

        //.pipe(minify({}))

        .pipe(gulp.dest('组件示例/'))

        .pipe(notify({ message: 'Css编译完成' }));

});

gulp.task('com-watch', function () {

    gulp.watch('组件示例/**/*.less', ['com']);

});