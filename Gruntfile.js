module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserify', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: [],
                dest: 'dist/groestl-hash.js',
                options: {
                    require: [
                        './index.js:groestl'
                    ]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/groestl-hash.min.js': ['dist/groestl-hash.js']
                }
            }
        }
    });
}