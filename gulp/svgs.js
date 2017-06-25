import gulp from 'gulp'

export default $ => (
  () => {
    gulp.src('src/a/svgs/*.svg')
      .pipe($.svgmin())
      .pipe($.svgstore())
      .pipe($.rename('sprite.twig'))
      .pipe(gulp.dest('src/pages/includes'))
      .pipe($.browserSync.stream())
      // .pipe(gulp.dest('craft/templates/includes'))
  }
)
