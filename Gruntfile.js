/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    acronymsPath: 'acronyms/acronyms.tex',
    glossaryPath: 'glossary/glossary.tex',
    shell: {
        build: {
          command: 'make'
        },
        clean: {
          command: 'make clean'
        },
        glossaries: {
          command: 'make glossaries_pdf'
        },
        bibliography: {
          command: 'make bibliography_pdf'
        },
        pdf: {
          command: 'make pdf'
        }
    },
    watch: {
      latex: {
        files: ['./**/*.tex', '!<%= acronymsPath %>', '!<%= glossaryPath %>'],
        tasks: ['shell:pdf']
      },
      acronyms: {
        files: ['<%= acronymsPath %>', '<%= glossaryPath %>'],
        tasks: ['shell:glossaries']
      },
      bibliography: {
        files: ['./**/*.bib'],
        tasks: ['shell:bibliography']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('work', ['build', 'watch']);
  grunt.registerTask('clean', ['shell:clean']);
  grunt.registerTask('default', ['work']);

};
