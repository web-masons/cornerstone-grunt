module.exports = function(){
  return {
    coffeelint: {
      options: { /*jshint -W106 */
        'max_line_length': {
          'level': 'ignore'
        }/*jshint +W106 */
      },
      app: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
      test: [
        'test/karma/**/*.coffee'
      ]
    }
  };
};