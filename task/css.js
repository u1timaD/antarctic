import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import rename from "gulp-rename";
import groupCssMediaQueriese from "gulp-group-css-media-queries";
// import shorthand from "gulp-shorthand");

// Обработка css
const css = () => {
	return gulp.src(path.css.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(groupCssMediaQueriese())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pip(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: '.' }))
    // .pipe(browserSync.stream());
}

export default css;