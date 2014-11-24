module.exports = function(grunt){
  grunt.registerTask('i18n', 'Convert po files to json', function(){
    //need to make directory first...
    grunt.file.mkdir(grunt.config('i18n').dest);
    grunt.task.run('i18next_conv');
  });
};
