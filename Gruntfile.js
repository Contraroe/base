module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			jshint: {
				dev: {        
					src: ['/src/_js/**/*.js']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint'),

	// task setup 
	grunt.registerTask('default', []);
};