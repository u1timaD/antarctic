import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import svgo from "gulp-svgo";

// Обработка Icons
const icon = () => {
	return gulp.src(path.icon.src)
    .pipe(svgo())
    .pipe(gulp.dest(path.icon.dest))
}

export default icon;