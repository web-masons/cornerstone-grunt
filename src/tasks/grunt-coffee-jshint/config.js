module.exports = function(){
  return {/*jshint -W106*/
    coffee_jshint : {
      files : [
        "Gruntfile.js",
        "<%= yeoman.app %>/scripts/{,*/}*.coffee"
      ],
      options : {
        jshintrc: ".jshintrc"
      }
    }/*jshint +W106*/
  };
};