/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
        build: {
          command: 'sh toPDF.sh'
        },
        clean: {
          command: 'sh clean.sh'
        }
    },
    watch: {
      latex: {
        files: './**/*.tex',
        tasks: ['shell:build']
      },
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('work', ['build', 'watch']);
  grunt.registerTask('clean', ['shell:clean']);
  grunt.registerTask('default', ['work']);

};
