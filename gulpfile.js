import gulp from "gulp";
import browserSync from "browser-sync";

// Конфигурация
import path from "./config/path.js";
import app from "./config/app.js";

// Плагины

// Задачи
import clear from "./task/clear.js";
import html from "./task/html.js";
// import css from "./task/css.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import font from "./task/font.js";
import sprite from "./task/sprite.js";
import icon from "./task/icon.js";
import copy from "./task/copy.js";
import fav from "./task/fav.js";

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

// Наблюдение
const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
  gulp.watch(path.sprite.watch, sprite).on("all", browserSync.reload);
  gulp.watch(path.icon.watch, icon).on("all", browserSync.reload);
  gulp.watch(path.copy.watch, copy).on("all", browserSync.reload);
  gulp.watch(path.fav.watch, copy).on("all", browserSync.reload);
}

const build = gulp.series(
  clear,
  copy,
  gulp.parallel(
  scss,
  html,
  js,
  img,
  font,
  sprite,
  icon,
  fav
));

const dev = gulp.series(
  build,
  gulp.parallel(
    watcher,
    server
  )
);

// Задачи
export { html };
export { scss };
export { js };
export { img };
export { font };
export { sprite };
export { icon };
export { copy };
export { fav };

// Сборка
export default app.isProd
  ? build
  : dev;