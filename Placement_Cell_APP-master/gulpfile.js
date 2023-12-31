const gulp = require('gulp');

const rev = require('gulp-rev');   
const uglify = require('gulp-uglify-es').default;
// const del = require('del');


gulp.task('css', function(done){
    gulp.src('./assets/**/*.css')
    .pipe(rev())
       .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd: 'public',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
 done(); });


gulp.task('js', function(done){
    console.log('minifying js...');

     gulp.src('./assets/**/*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd: 'public',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done()
});



// empty the public/assets directory
gulp.task('clean:assets', function(done){
    // del.sync('./public/assets');
    done();
});

gulp.task('build', gulp.series('clean:assets', 'css', 'js'), function(done){
    console.log('Building assets');
    done();
});