var now = new Date();

// Get date as yyyy-mm-dd
var year = now.getFullYear();
var month = now.getMonth() + 1;
if (month < 10) { month = '0' + month };
var day = now.getDate();
if (day < 10) { day = '0' + day };
var date = year + '-' + month + '-' + day

// Get time as hh-mm-ss
var hour = now.getHours();
if (hour < 10) { hour = '0' + hour };
var minute = now.getMinutes();
if (minute < 10) { minute = '0' + minute };
var second = now.getSeconds();
if (second < 10) { second = '0' + second };
var time = hour + '-' + minute + '-' + second;

var filename = date + '-' + time + '-' + 'riverconditions.png';

var page = require('webpage').create();
page.open('http://riverconditions.environment-agency.gov.uk/', function() {
  page.render(filename);
  console.log('Screenshot saved as ' + filename);
  phantom.exit();
});
