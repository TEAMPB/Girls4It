/**
  Copyright (c) 2015, 2016, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

var path = require('path');

module.exports = function(grunt) {

  require("load-grunt-config")(grunt, 
  {
    configPath: path.join(process.cwd(), "scripts/grunt/config")
  }); 
  
  grunt.loadNpmTasks("grunt-oraclejet");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  
  grunt.initConfig({
  connect: {
    dev: {
      options: {
        port: 8090,
        base: 'hybrid/www',
        keepalive: true
      }
    }
  },
  open : {
    dev : {
      path: 'http://localhost:8090',
    }
  } 
});

  grunt.registerTask("build", (buildType) => {
    grunt.task.run([`oraclejet-build:${buildType}`]);
  });

  grunt.registerTask("serve", (buildType) => {
    grunt.task.run([`oraclejet-serve:${buildType}`]);
  }); 
  
  grunt.registerTask("test", (buildType) => {
    grunt.task.run(["build","open:dev"]);
  })
  
  grunt.registerTask("startServer",(buildType) => {
    grunt.task.run(["connect:dev"]);
  })

};

