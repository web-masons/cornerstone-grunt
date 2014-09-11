module.exports = function(){
  return {
    coffee: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '.tmp/scripts/main.js': '<%= yeoman.app %>/scripts/{,*/}*.coffee'
        }
      }
    }
  };
};