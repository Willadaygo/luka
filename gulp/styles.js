import gulp from 'gulp'

export default ($, production) => (
  () => {
    gulp.src(['src/modules/**/*.css'])
      .pipe($.plumber({
        handleError(err) {
          console.log(err)
          this.emit('end')
        },
      }))
      .pipe($.postcss([
        $.import({
          path: ['src/css'],
        }),
        $.vars(),
        $.cssnext({
          browsers: ['last 2 versions'],
        }),
      ]))
      .pipe(production ? $.cssnano({
        zindex: false,
        autoprefixer: false,
      }) : $.util.noop())
      .pipe($.rename((path) => {
        path.dirname = ''
      }))
      .pipe(production ? $.md5Plus(10, './app/craft/templates/modules/**/*.twig') : $.util.noop())
      .pipe(gulp.dest('app/public/css'))
      .pipe($.browserSync.stream())
  }
)
