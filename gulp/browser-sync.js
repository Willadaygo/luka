export default $ => (
  () => {
    $.browserSync.init({
      open: true,
      notify: false,
      proxy: 'http://luka.dev/',
      https: false,
    })
  }
)
