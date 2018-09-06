const gulp = require('gulp')
const del = require('del')
const { exec } = require('child_process')

gulp.task('build-client', function () {
  exec('npm run build', {
    cwd: process.cwd(),
    maxBuffer: 1000 * 1024
  }, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      return
    }

    console.log('build client done')
    gulp.src('./server/public/index.html')
      .pipe(gulp.dest('./server/view'))
    del(['./server/public/index.html'])
  })
})

gulp.task('start', function () {
  plugins.nodemon({
    script: './server/server.js',
    env: { 'NODE_ENV': 'development' }
  })
})
