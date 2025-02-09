const sass = require('node-sass');

module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				implementation: sass
			},
			main: {
				files: {
					'style.css': 'style.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: [
					{ src: 'style.css' }
				]
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false
				}
			},
			files: [ 'Gruntfile.js', '**/*.js' ]
		},

		watch: {
			main: {
				files: [ 'Gruntfile.js', '*/*.js', '*/*.scss' ],
				tasks: 'default'
			},
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-sass' );

	grunt.registerTask( 'default', [ 'sass', 'autoprefixer' ] );

	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
