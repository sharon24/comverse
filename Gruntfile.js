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
    files: ['index.md'],
    tasks: ['markdown'],
  },

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
  }

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-markdown');

	// Default task(s).
	grunt.registerTask('default', ['uglify','watch']);
};