import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import csso from "postcss-csso";
import rename from "gulp-rename";
import groupCssMediaQueriese from "gulp-group-css-media-queries";
import size from "gulp-size";
import webpCss from "gulp-webp-css";
// import shorthand from "gulp-shorthand";

// Обработка css
const scss = () => {
	return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(webpCss())
    .pipe(groupCssMediaQueriese())
    // .pipe(shorthand())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    // .pipe(browserSync.stream());
  }

export default scss;