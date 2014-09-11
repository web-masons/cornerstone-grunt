/*
  This file does an shallow object merge of all of the config files
*/
/*global require*/
var extend = require('util')._extend;

module.exports = function(grunt){
  var tasks = [
    './tasks/grunt-config-variables/config.js',
    './tasks/grunt-contrib-clean/config.js',
    './tasks/grunt-contrib-copy/config.js',
    './tasks/grunt-contrib-compass/config.js',
    './tasks/grunt-contrib-coffee/config.js',
    './tasks/grunt-coffeelint/config.js',
    './tasks/grunt-contrib-jshint/config.js',
    './tasks/grunt-contrib-concat/config.js',
    './tasks/grunt-ng-annotate/config.js',
    './tasks/grunt-contrib-cssmin/config.js',
    './tasks/grunt-contrib-uglify/config.js',
    './tasks/grunt-contrib-imagemin/config.js',
    './tasks/grunt-concurrent/config.js',
    './tasks/grunt-contrib-watch/config.js',
    './tasks/grunt-shell/config.js',
    './tasks/grunt-contrib-connect/config.js',
    './tasks/grunt-i18next-conv/config.js',
    './tasks/karma/config.js',
    './tasks/cornerstone-test/config.js',
    './tasks/cornerstone-i18n/config.js',
    './tasks/cornerstone-docs/config.js',
    './tasks/grunt-text-replace/config.js'
  ];
  var config = {
    composer: grunt.file.readJSON("composer.json")
  };

  for(var i=0; i < tasks.length; i++){
    extend(config, require(tasks[i])(grunt));
  }
  return config;
};
