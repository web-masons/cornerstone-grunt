/*jslint indent: 2*/
module.exports = function (grunt) {
  "use strict";
  var languages = grunt.file.expand({'cwd': 'module'}, "**/*.po"),
    i = 0,
    config;

  if (languages.length > 0) {
    /*jshint -W106*/
    config = {
      i18next_conv: {
        all: {
          files: []
        }
      }
    };
    /*jshint +W106*/

    for (i = 0; i < languages.length; i += 1) {
      //str will be <module>/language/<filename>
      //where filename is <something>_<lang>.po
      var str = languages[i],
        filename = str.split('/'); //get po file's name

      filename = filename.pop();

      //pull out the language piece
      var parts = filename.split('_');

      if (parts.length > 1) {
        var subParts = parts[1].split('.'),
          lang = subParts[0];
        /*jshint -W106*/
        config.i18next_conv.all.files.push({
          src: 'module/' + languages[i],
          dest: '<%= yeoman.dist %>/language/' + parts[0] + '_' + lang + '.json',
          domain: lang
        });
        /*jshint +W106*/
      }
    }
  }

  return config;
};