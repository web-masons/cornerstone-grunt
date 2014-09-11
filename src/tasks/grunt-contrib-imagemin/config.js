module.exports = function(){
  return {
    imagemin: {
      options: {
        cache: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: ['**/*.{png,jpg,jpeg,gif}', '!sprites/**'],
          dest: '<%= yeoman.dist %>/assets/images'
        }]
      },
      sprites: {
        files: [{
          expand: true,
          cwd: '<%= compass.options.generatedImagesDir %>',
          src: '{,*/}*.png',
          dest: 'public<%= compass.options.httpGeneratedImagesPath %>'
        }]
      }
    }
  };
};