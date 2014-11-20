module.exports = function(){

  return {
    watch: {
      options: {
        spawn: false
      },
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffeelint:app', 'newer:coffee:dist', 'copy:jsMap', 'copy:coffee', 'newer:concat:js']
      },
      coffeeTest: {
        files: ['test/karma/**/*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffeelint:test', 'karma:unit']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.{js,json}'],
        tasks: ['newer:jshint', 'newer:concat:js']
      },
      jsTest: {
        files: ['test/karma/spec/{,*/}*.{js,json}'],
        tasks: ['newer:jshint', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'concat:css', 'copy:sprites']
      },
      "static": {
        files: [
          '<%= yeoman.app %>/*.{ico,png,txt}',
          '<%= yeoman.app %>/views/{,*/}*.{html,tpl}',
          '<%= yeoman.app %>/assets/images/{,*/}*.{webp}',
          '<%= yeoman.app %>/assets/fonts/*'
        ],
        tasks: ['newer:copy:dist']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['newer:jshint']
      },
      gruntfileCoffee: {
        files: ['Gruntfile.coffee'],
        tasks: ['newer:coffeelint']
      }
    }
  };
};
