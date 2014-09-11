module.exports = function(){
  return {
    jshint : {
      files : [
        "Gruntfile.js",
        "<%= yeoman.app %>/scripts/{,*/}*.js"
      ],
      options : {
        jshintrc: ".jshintrc"
      }
    }
  };
};