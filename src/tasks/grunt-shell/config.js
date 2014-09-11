module.exports = function () {
  return {
    shell: {
      casperjs: {
        options: {
          stdout: true
        },
        command: 'casperjs test --ignore-ssl-errors=yes --includes=.casperjsrc.js,./test/casperjs/inc/inc.js --xunit=test/results/casperjs.xml ./test/casperjs/tests/'
      },
      phpunit: {
        options: {
          stdout: true,
          execOptions: {
            cwd: 'test/phpunit'
          }
        },
        command: function(group) {
          if(typeof group === 'undefined' || group === '') {
            return 'phpunit -c phpunit.xml --log-junit=../../test/results/phpunit.xml';
          } else {
            return 'phpunit -c phpunit.xml --log-junit=../../test/results/phpunit-' + group + '.xml --group=' + group;
          }
        }
      }
    }
  };
};