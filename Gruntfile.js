'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    buildcontrol: 'grunt-build-control'
  });

  grunt.initConfig({

    buildcontrol: {
      options: {
        dir: 'slides',
        commit: true,
        push: true,
        connectCommits: false,
        message: 'Built live demo from commit %sourceCommit%'
      },
      demo: {
        options: {
          remote: 'git@github.com:nlhuykhang/slides-meteor-server-stuffs-training.git',
          branch: 'gh-pages',
        }
      }
    },
  });

  grunt.registerTask('deploy', ['buildcontrol']);
  grunt.registerTask('default', ['deploy']);
};
