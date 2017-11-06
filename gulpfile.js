var gulp = require("gulp"),
    cleanCSS = require("gulp-clean-css"),
    csslint = require("gulp-csslint"),
    concat = require("gulp-concat");


const PATHS = {
    CSS: {
        SRC : './client/src/css/**/*.css', //all css files in directory
        DEST: './client/public/css'
    }
};

// gulp.task("default",function () {
//     var cssWatcher = gulp.watch(PATHS.CSS.SRC, ["css"]);
//     cssWatcher.on('change',function (event) {
//         console.log("file" + event.path + " was " + event.type);
//     });
// });

gulp.task("css", function () {
    gulp.src(PATHS.CSS.SRC)
        .pipe(csslint())
        .pipe(concat("base.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(PATHS.CSS.DEST));
});

gulp.task("copy",function(){
    gulp.src(PATHS.CSS.SRC)
        .pipe(gulp.dest(PATHS.CSS.DEST));
});
