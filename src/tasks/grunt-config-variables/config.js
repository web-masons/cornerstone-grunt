module.exports = function(grunt){
  return {
    pubOut: 'dist',
    sassOut: '.tmp',
    yeoman: {
      app: grunt.file.exists('bower.json') ? grunt.file.readJSON('bower.json').appPath || 'module/Application/app' : 'module/Application/app',
      dist: 'public/<%= pubOut %>'
    },
    mainCss: [],
    mainJs: [],
    bowerCssFiles: [],
    bowerJsFiles: [],
    /*
     * List concurrent tasks that you need to perform before running unit tests
     * Used as configuration for concurrent:test
     * If some of your tasks cannot be concurrent, provide a task that runs your sequential tasks
     * ie. grunt.registerTask('myTask', ['taskOne', 'taskTwo'])
     *     testSetupTasks: ['myTask']
     * cannot be an empty array
     */
    testSetupTasks: ['empty']
  };
};