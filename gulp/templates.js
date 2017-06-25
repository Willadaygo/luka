import gulp from 'gulp'

export default $ => (
  () => {
    gulp.src(['src/pages/**/*.twig', '!src/pages/**/_entry.twig', '!src/pages/includes/*.twig'])
      .pipe($.rename({ basename: 'index' }))
      .pipe(gulp.dest('app/craft/templates'))

    gulp.src(['src/pages/**/_entry.twig'])
      .pipe(gulp.dest('app/craft/templates'))

    gulp.src(['src/pages/includes/*.twig'])
      .pipe(gulp.dest('app/craft/templates/includes'))

    gulp.src(['src/modules/**/*.twig'])
      .pipe($.rename((path) => {
        path.basename = path.dirname
        path.dirname = 'modules'
      }))
      .pipe(gulp.dest('app/craft/templates'))
  }
)
