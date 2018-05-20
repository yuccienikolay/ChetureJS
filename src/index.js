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

global.MakeNormal = function(AString, Holder="") {
  let NormalString = AString.split(".").join(Holder);
  let BadLetters = " .,./.\\.$.@.#.%.^.&.*.(.).-.{.}.[.].=.+.?.<.>.~.;._".split(".");
  BadLetters.forEach(function (element, index, array) {
    NormalString = NormalString.split(element).join(Holder);
  });
  return NormalString;
}

global.ToClassicDate = function(timestamp) {
  let date = new Date();
  date.setTime(timestamp);
  date.setHours(date.getHours());
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();
  let ms = date.getMonth();
  let y = date.getFullYear();
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

import {Chetrack} from './Chetrack.js';
global.Chetrack = Chetrack;


// Test

Print(Chetrack.getID());
