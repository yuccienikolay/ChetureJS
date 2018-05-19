// Global utils Functions

global.utils = {};

global.utils.CheckTime = function(i) {
    if (i < 10) {
    	i = "0" + i
    };
    return i
}


// Global Functions

global.Print = function(argument) {
	console.log(argument)
}

global.MakeNormal = function(placeholder) {
  var normalString = this.ReplaceAll(".", placeholder);
  var toChange = " .,./.\\.$.@.#.%.^.&.*.(.).-.{.}.[.].=.+.?.<.>.~.;._".split(".");
  toChange.forEach( function (element, index, array) {
    normalString = normalString.ReplaceAll(element, placeholder);
  });
  return normalString;
}

global.ToClassicDate = function(timestamp) {
  var date = new Date();
  date.setTime(timestamp);
  date.setHours(date.getHours());
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var d = date.getDay();
  var ms = date.getMonth();
  var y = date.getFullYear();
  m = CheckTime(m);
  s = CheckTime(s);
  return h + ":" + m + ":" + s + " " + d + "." + ms + "." + y;
}

global.SizeDict = function(dictionary) {
	return Object.keys(dictionary).length
}

function function_name(argument) {

}


// import

import {user, build} from './Chetrack.js';


// Test

Print(user());
Print(build);
