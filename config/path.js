const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/sass/*.css",
    watch: pathSrc + "/sass/**/*.css",
    dest: pathDest + "/css"
  },

  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/img/*.{jpg,jpeg,png,svg,gif}",
    watch: pathSrc + "/img/**/*.{jpg,jpeg,png,svg,gif}",
    dest: pathDest + "/img"
  },

  sprite: {
    src: pathSrc + "/img/sprite.svg",
    watch: pathSrc + "/img/sprite.svg",
    dest: pathDest + "/img"
  },

  icon: {
    src: pathSrc + "/img/icons/*.{svg,png}",
    watch: pathSrc + "/img/icons/**/*.{svg,png}",
    dest: pathDest + "/img/icons"
  },

  font: {
    src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}",
    dest: pathDest + "/font"
  },

  copy: {
    src: pathSrc,
    watch: pathSrc,
    dest: pathDest
  },

  fav: {
    src: pathSrc + "/img/favicons/*.{svg,png}",
    watch: pathSrc + "/img/favicons/*.{svg,png}",
    dest: pathDest + "/img/favicons"
  }
}