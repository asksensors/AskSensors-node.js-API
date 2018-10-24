/*
 * Automated data sending using https
 * Description: This example code sends dummy data to askSensors IoT platfom (https://asksensors.com) over HTTPS GET Requests.
 *  Author: https://asksensors.com, 2018
 *  github: https://github.com/asksensors
 */

// includes
var https = require('https');
const request = require('request');
// Configuration
var host = 'https://asksensors.com';		// server host
var ApiKeyIn = '...................'; // TODO: fill your sensor Api Key In given by https://asksensors.com
var module1 = 0;				// module 
var timerInterval = 20000;		// timer interval
// Function declaration: send data
function send_data(){
	var url = host + '/api.asksensors/write/';	
		url+= ApiKeyIn;
		url+= '?module1='
		url+= 100*Math.random();//module1++;
	console.log('Data sent to:' + url);
	request(url, { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }

	});
}
send_data();// send first data
// Send data every timerInterval
setInterval(send_data, timerInterval);		// setInterval 
