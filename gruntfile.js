module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.initConfig({

		uglify:{
			my_target:{
				files: {
					'_/js/script.js' : ['_/components/js/*.js']
				}
			}
		}, //uglify
		compass: {
			dev:{
				options:{
					config: 'config.rb'
				}
			}
		}, //compass
		watch: {
			options: { livereload : true },/*This ll work only if live reload js works*/
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			},
			html: {
				files: ['*.html']
			} /*This ll work only if live reload js works*/
		} // watch

	})//iniConfig

	grunt.registerTask( 'default','watch' );

} //export