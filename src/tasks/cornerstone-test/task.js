module.exports = function(grunt){
  grunt.registerMultiTask('test', 'Run test groups', function(){
    var tasks = this.data.tasks || this.data;
    grunt.task.run(tasks);
  });
};