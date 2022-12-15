import gulp from "gulp";
// import browserSync from "browser-sync";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import squoosh from "gulp-libsquoosh";
import size from "gulp-size";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";

// Обработка Images
const img = () => {
	return gulp.src(path.img.src)
    .pipe(plumber())
    .pipe(size({ title: "img ДО"}))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, squoosh()))
    .pipe(size({ title: "img ПОСЛЕ"}))
    .pipe(gulp.dest(path.img.dest))
}

export default img;