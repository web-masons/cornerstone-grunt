module.exports = function(){
  return {
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: 'main.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    }
  };
};