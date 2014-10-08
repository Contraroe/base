module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			jshint: {
				dev: {        
					src: ['/src/_js/**/*.js']
				}
			},
		livereload  : {
			options   : {
				base    : 'public',
			},
			files     : ['public/**/*']
		},
		watch: {
			somecss: {
				files: '**/*.css',
				tasks: ['copy:somecss']
			},
			js: {
				files: '**/*.js',
				tasks: ['concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint'),
	grunt.loadNpmTasks('grunt-livereload');

	// task setup 
	grunt.registerTask('default', []);
};