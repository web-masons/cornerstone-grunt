/*
 Register the common tasks for cornerstone
 */

module.exports = function(grunt){
  require('./tasks/cornerstone-test/task.js')(grunt);
  require('./tasks/cornerstone-empty/task.js')(grunt);
  require('./tasks/cornerstone-i18n/task.js')(grunt);
  require('./tasks/cornerstone-docs/task.js')(grunt);

  grunt.registerTask('build', [
    'clean:dist',
    'i18n',
    'concurrent:dist',
    'copy:sprites',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('build-dev', [
    'clean:dist',
    'i18n',
    'concurrent:server',
    'concat',
    'copy'
  ]);

  //default
  grunt.registerTask('default', [
    'prod'
  ]);

  grunt.registerTask('prod', [
    'jshint',
    'coffeelint',
    'concurrent:test',
    'test:unit',
    'build'
  ]);

  //build with unminified assets
  grunt.registerTask('dev', [
    'newer:jshint',
    'newer:coffeelint',
    'concurrent:test',
    'test:unit',
    'build-dev',
    'watch'
  ]);

  //Debug Karma tests
  grunt.registerTask('debug-karma', [
    'newer:jshint',
    'newer:coffeelint',
    'concurrent:test',
    'karma:debug'
  ]);

  //Custom Karma configuration, doesn't override singleRun or browsers
  grunt.registerTask('custom-karma', [
    'newer:jshint',
    'newer:coffeelint',
    'concurrent:test',
    'karma:custom'
  ]);

  // Set the base path for .po files to your local path
  grunt.registerTask('poedit-basepath', [
    'replace:poeditbasepath'
  ]);

  // Lint and compile coffee
  grunt.registerTask('compile-coffee', [
    'newer:coffeelint:app',
    'newer:coffee:dist',
    'newer:concat:js'
  ]);

  // Lint and compile coffee tests
  grunt.registerTask('compile-tests', [
    'newer:coffeelint:test',
    'karma:unit'
  ]);

  // Compile sass
  grunt.registerTask('compile-sass', [
    'compass:server',
    'concat:css',
    'copy:sprites'
  ]);

  // Copy Assets
  grunt.registerTask('copy-assets', [
    'copy:dist'
  ]);
};