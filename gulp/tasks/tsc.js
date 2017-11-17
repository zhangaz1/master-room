'use strict';


gulp.task('tsc', cb => {
    return gulp
        .src(config.test.src)
        .pipe(plugins.mocha())
        .on('error', function() {
            console.log(arguments);
        })
        .on('end', function(err) {
            if(err) {
                console.log(err);
            }

            // cb(null); // duplicate end
        });
});
