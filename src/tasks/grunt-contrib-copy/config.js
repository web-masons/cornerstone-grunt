module.exports = function(){
  return {
    copy : {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'views/**/*',
            'assets/images/**/*.{webp}',
            'assets/fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/assets/images',
          src: ['generated/*']
        }]
      },
      jsMap: {
        files: [{
          expand: true,
          cwd: '.tmp/scripts',
          dest: '<%= yeoman.dist %>/scripts',
          src: ['**/*.js.map']
        }]
      },
      coffee: {
        files: [{
          expand: true,
          cwd: '.tmp/scripts',
          dest: '<%= yeoman.dist %>/scripts',
          src: ['**/*.coffee']
        }]
      },
      cssMap: {
        files: [{
          expand: true,
          cwd: '.tmp/styles',
          dest: '<%= yeoman.dist %>/styles',
          src: ['**/*.css.map']
        }]
      },
      sass: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          dest: '<%= yeoman.dist %>/styles',
          src: ['**/*.scss']
        }]
      },
      sprites: {
        files: [{
          expand: true,
          cwd: '<%= compass.options.generatedImagesDir %>',
          src: '**/*.png',
          dest: 'public<%= compass.options.httpGeneratedImagesPath %>'
        }]
      }
    }
  };
};