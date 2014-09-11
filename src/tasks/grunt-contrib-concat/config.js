module.exports = function(){
  return {
    concat : {
      css : {
        src: [
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/styles/{,*/}*.css'
        ],
        dest: '<%= yeoman.dist %>/styles/main.css'
      },
      js : {
        src: [
          '.tmp/scripts/{,*/}*.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ],
        dest: '<%= yeoman.dist %>/scripts/main.js'
      },
      vendorjs : {
        src: [ '<%= bowerJsFiles %>' ],
        dest: '<%= yeoman.dist %>/scripts/vendor.js'
      },
      vendorcss: {
        src: [ '<%= bowerCssFiles %>' ],
        dest: '<%= yeoman.dist %>/styles/vendor.css'
      }
    }
  };
};