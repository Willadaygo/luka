export default $ => (
  () => {
    $.browserSync.init({
      open: true,
      notify: false,
      proxy: 'https://luka.dev/',
      https: true,
    })
  }
)
