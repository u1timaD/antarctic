import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import terser from "gulp-terser";
import jsmin from "gulp-jsmin";
import rename from "gulp-rename";
import babel from "gulp-babel";
// import webpack from "webpack";

// Обработка JavaScript
const js = () => {
	return gulp.src(path.js.src)
    .pipe(plumber())
    .pipe(babel())
    // .pipe(webpack(app.webpack))
    .pipe(jsmin())
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
}

export default js;