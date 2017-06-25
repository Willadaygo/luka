import gulp from 'gulp'

export default () => (
  () => {
    gulp.src('src/a/fonts/*')
      .pipe(gulp.dest('app/public/fonts'))
  }
)
