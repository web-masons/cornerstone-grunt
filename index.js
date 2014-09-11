/*global require*/
var config = require('./src/config.js'),
    taskList = require('./src/register_task_list.js'),
    extend = require('util')._extend;
module.exports = function(grunt, configOverride){
  if("undefined" === typeof configOverride){
    configOverride = {};
  }
  var finalConfig = extend(config(grunt), configOverride);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt, {
    config: require('./package.json'),
    scope: 'peerDependencies'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig(finalConfig);

  taskList(grunt);
};