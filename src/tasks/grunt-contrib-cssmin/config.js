module.exports = function(){
  return {
    cssmin : {
      dist: {
        files: [{
          "<%= concat.css.dest %>": "<%= concat.css.dest %>"
        }, {
          "<%= concat.vendorcss.dest %>": "<%= concat.vendorcss.dest %>"
        }]
      }
    }
  };
};