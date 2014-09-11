module.exports = function(){
   var path = require('path');
   return {
    replace: {
      poeditbasepath: {
        src: [
          'module/**/*.po'
        ],
        overwrite: true,
        replacements: [{
          from: /"X-Poedit-Basepath:.*/,
          to: '"X-Poedit-Basepath: ' + path.resolve() + '/module/"'
        }]
      }
    }
  };
};