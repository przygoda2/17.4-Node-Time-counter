var os = require('os');

function time(uptime) {

  var h = Math.floor(uptime / 3600);
  var m = Math.floor(uptime % 3600 / 60);
  var s = Math.floor(uptime % 3600 % 60);

  var hours = h > 0 ? h : '';
  var minutes = m > 0 ? m : '';
  var seconds = s > 0 ? s : '';
  
  return {
    hours,
    minutes,
    seconds,
  };
}

exports.calculateFromSeconds = time;

/* 2
function time() {
    var hours = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var minutes = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var seconds = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    console.log(hours,minutes,seconds); 
}
exports.print = time;
*/

/* 1
var os = require('os');
var uptime = os.uptime();

function time() {
 var hours = Math.floor(uptime / 3600);
        var minutes = Math.floor((uptime - (hours * 3600)) / 60);
        var seconds = uptime - (hours * 3600) - (minutes * 60);

    if(uptime < 60) {
        console.log('Uptime ', seconds);
    }
    else if(uptime > 60) {
        console.log('Uptime ', minutes, ' min ' + seconds, ' sec ')
    }
    else {
        console.log('Uptime ', hours, 'h' + minutes, ' min ' + seconds, ' sec ');
    }
}
exports.print = time;
*/