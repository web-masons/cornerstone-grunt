module.exports = function(grunt){
  var config = {
    jshint: {
      "files": [
        'Gruntfile.js',
        'src/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      files: '<%= jshint.files %>',
      tasks: ['default']
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', "jshint");
};