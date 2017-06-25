import gulp from 'gulp'

export default () => (
  () => {
    gulp.src('src/pages/sitemap.xml')
      .pipe(gulp.dest('app/craft/templates'))
  }
)
