// Delay the yarn start script until .next has been fully built
setTimeout(function() {
    let exec = require('child_process').exec, child;
  
    child = exec('yarn build',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
      });
  }, 5000)