import gulp from 'gulp'

export default ($, production) => (
  () => {
    $.browserify({
      entries: 'src/js/app.js',
      debug: true,
    })
    .transform('babelify')
    .bundle()
    .on('error', err => console.error(err))
    .pipe($.source('app.js'))
    .pipe($.buffer())
    .pipe(production ? $.sourcemaps.init({ loadMaps: true }) : $.util.noop())
    .pipe(production ? $.streamify($.uglify({ output: { comments: false } })) : $.util.noop())
    .pipe(production ? $.sourcemaps.write('./') : $.util.noop())
    .pipe(production ? $.md5Plus(10, './app/craft/templates/includes/layout.twig') : $.util.noop())
    .pipe(gulp.dest('app/public/js'))
  }
)
