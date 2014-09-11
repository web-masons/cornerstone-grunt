//TODO: generate files dynamically to automatically minify all the files in dist

module.exports = function(){
  return {
    uglify : {
      dist : {
        files : [{
          "<%= concat.js.dest %>" : [ "<%= concat.js.dest %>" ]
        }, {
          "<%= concat.vendorjs.dest %>" : [ "<%= concat.vendorjs.dest %>" ]
        }]
      }
    }
  };
};