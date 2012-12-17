module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'src/js/app/*.js', 'src/js/main.js', 'test/**/*.js']
    },

    clean: {
      dist: ['dist']
    },

    copy: {
      target: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },

    qunit: {
      all: ['test/*.html']
    },

    requirejs : {
      std: {
        options: {
          name: 'main',
          mainConfigFile: 'src/js/main.js',
          out: 'dist/project-text-almond.js',
          optimize: 'none',
          almond: true,
          replaceRequireScript: [{
            files: ['dist/index.html'],
            modulePath: 'project-text-almond'
          }]
        }
      }
    }
  });

  // load default grunt-contrib tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-requirejs');

  // register default task
  grunt.registerTask('default', ['clean', 'jshint', 'qunit', 'copy', 'requirejs']);

};
