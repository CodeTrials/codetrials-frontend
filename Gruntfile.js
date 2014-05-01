module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			css: {
				files: {
					'build/css/main.css': 'src/css/main.less'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: false,
					data: function(dest, src) {
						return require("./src/data/default.js");
					}
				},
				files: {
					'build/html/index.html': 'src/html/index.jade'
				}
			}
		},
		clean: {
			css: {
				src: ['build/css/']
			},
			html: {
				src: ['build/html']
			}
		},
		watch: {
			less: {
				files: ['src/css/**/*.less'],
				tasks: ['css']
			},
			jade: {
				files: ['src/html/**/*.jade'],
				tasks: ['html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('html', ['clean:html', 'jade'])
	grunt.registerTask('css', ['clean:css', 'less'])
	grunt.registerTask('build', ['css', 'html'])
	grunt.registerTask('default', ['build', 'watch'])
}