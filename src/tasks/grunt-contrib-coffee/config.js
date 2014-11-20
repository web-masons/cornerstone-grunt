module.exports = function(){
  return {
    coffee: {
      dist: {
        files: {
          '.tmp/scripts/main.js': '<%= yeoman.app %>/scripts/{,*/}*.coffee'
        }
      }
    }
  };
};