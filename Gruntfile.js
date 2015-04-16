module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			target: {
				src: 'src/js/<%= pkg.name %>.js',
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},
		
		    watch: {
  		scripts: {
    	files: ['outline.md'],
    	 tasks: ['markdown'],
    	options: {
      	spawn: true

    	}
  	},
        css: {
            files: '**/*.css',
            options: {
                livereload: true
            }
        },
        html: {
            files: '*.html',
            options: {
                livereload: true
            }


} },
		


		  markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: '',
          ext: '.html'
        }
      ]
    }
  },
    connect: {
    	server: {
      		options: {
        	port: 8080,
        	protocol: 'http',
        	base: '.',
        	hostname: 'localhost',
        	keepalive: false
      		}
    	}
  	},

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-livereload');
	grunt.loadNpmTasks('grunt-connect');

	// Default task(s).
	grunt.registerTask('default', ['uglify','watch']);
};