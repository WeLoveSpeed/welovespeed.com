var gulp   = require('gulp');
var brotli = require('gulp-brotli');

gulp.task('brotliCompress', () => {
    let src  = "_site/**/*.{js,css,svg,html,txt,xml}",
        dest = "_site/";

    return gulp.src(src)
        .pipe(brotli.compress({
            extension: "br",
            quality: 11
        }))
        .pipe(gulp.dest(dest));
});
