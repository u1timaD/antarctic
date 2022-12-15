import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
// import svgo from "gulp-svgo";

// Обработка fav
const fav = () => {
	return gulp.src(path.fav.src)
  .pipe(gulp.dest(path.fav.dest))
}

export default fav;