module.exports = function(){
  var config = {
    concurrent: {
      server: [
        'coffee',
        'i18n',
        'compass:server',
        'imagemin:dist'
      ],
      test: ['<%= testSetupTasks %>'],
      dist: [
        'coffee',
        'compass:dist',
        'imagemin:dist'
      ]
    }
  };

  return config;
};