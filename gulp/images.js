import gulp from 'gulp'

export default $ => (
  (cb) => {
    gulp.src(['src/a/imgs/*'])
      .pipe($.imagemin({
        optimizationLevel: 8,
        progressive: true,
        interlaced: true,
      }))
      .pipe(gulp.dest('app/public/imgs'))
        .on('end', cb)
        .on('error', cb)

    gulp.src(['src/a/favicons/*'])
        .pipe(gulp.dest('app/public'))
  }
)
