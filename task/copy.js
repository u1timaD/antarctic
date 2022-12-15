import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import svgo from "gulp-svgo";

// Обработка copy
const copy = () => {
	return gulp.src([
    'src/html/*.ico',
    'src/html/manifest.webmanifest'
  ], {
    base: 'src'
  })
    .pipe(gulp.dest(path.copy.dest))
}

export default copy;