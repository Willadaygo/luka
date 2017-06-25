import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import browserSync from './gulp/browser-sync'
import baseStyles from './gulp/base-styles'
import styles from './gulp/styles'
import svgs from './gulp/svgs'
import fonts from './gulp/fonts'
import sitemap from './gulp/sitemap'
import images from './gulp/images'
import scripts from './gulp/scripts'
import templates from './gulp/templates'

const $ = loadPlugins({
  pattern: '*',
  rename: {
    'vinyl-source-stream': 'source',
    'vinyl-buffer': 'buffer',
    'postcss-cssnext': 'cssnext',
    'postcss-import': 'import',
    'postcss-simple-vars': 'vars',
  },
})

const production = !!process.env.NODE_ENV
gulp.task('browserSync', browserSync($, production))
gulp.task('baseStyles', baseStyles($, production))
gulp.task('styles', styles($, production))
gulp.task('svgs', svgs($))
gulp.task('fonts', fonts())
gulp.task('sitemap', sitemap())
gulp.task('images', images($))
gulp.task('scripts', scripts($, production))
gulp.task('templates', templates($, production))

gulp.task('default', ['scripts', 'fonts', 'sitemap', 'baseStyles', 'styles', 'templates', 'images', 'browserSync'], () => {
  gulp.watch(['src/css/**/*.css'], ['baseStyles'])
  gulp.watch(['src/modules/**/*.css'], ['styles'])
  gulp.watch(['src/**/*.twig'], ['templates']).on('change', $.browserSync.reload)
  gulp.watch(['src/a/svgs/*.svg'], ['templates', 'svgs']).on('change', $.browserSync.reload)
  gulp.watch(['src/**/*.js'], ['scripts']).on('change', $.browserSync.reload)
})

gulp.task('build', ['templates', 'images', 'fonts', 'sitemap'], () => {
  gulp.run(['scripts', 'baseStyles', 'styles'])
})
