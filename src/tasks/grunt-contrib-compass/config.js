module.exports = function(){
  return {
    compass: {
      options: {
        sassDir: "<%= yeoman.app %>/styles",
        cssDir: ".tmp/styles",
        generatedImagesDir: ".tmp/assets/images/generated",
        imagesDir: "<%= yeoman.app %>/assets/images",
        httpPath: "/<%= pubOut %>",
        httpStylesheetsPath: "/<%= pubOut %>/styles/",
        httpImagesPath: "/<%= pubOut %>/assets/images/",
        httpGeneratedImagesPath: "/<%= pubOut %>/assets/images/generated",
        httpFontsPath: "/<%= pubOut %>/assets/fonts/",
        outputStyle: "nested",
        raw: "Sass::Script::Number.precision = 10\n"
      },
      dist: {
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: "<%= yeoman.dist %>/assets/images/generated"
        }
      }
    }
  };
};