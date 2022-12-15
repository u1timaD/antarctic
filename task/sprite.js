import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import svgo from "gulp-svgo";
import svgstore from "gulp-svgstore";
import rename from "gulp-rename";

// Обработка sprite
const sprite = () => {
	return gulp.src(path.sprite.src)
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(path.sprite.dest))
}

export default sprite;