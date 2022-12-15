import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";

// Обработка html
const html = () => {
	return gulp.src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    // .pipe(webpHtml())
    .pipe(size({ title: "До сжатия" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "После сжатия" }))
    .pipe(gulp.dest(path.html.dest))
    // .pipe(browserSync.stream());
}

export default html;