// By Kiselev Nikolay
// 2018
// Cheture javascript web lib

let Cheture = {
    about: "By Kiselev Nikolay",
    whereis: "https://github.com/yuccienikolay/ChetureJS",
    utils: {}
};

// Util functions

Cheture.utils.CheckTime = function(i) {
    if (i < 10) {
    	i = "0" + i
    };
    return i
}

// Non-util Functions

Cheture.Print = function(argument) {
	console.log(argument)
}

Cheture.MakeNormal = function(AString, Holder="") {
  let NormalString = AString.split(".").join(Holder);
  let BadLetters = " .,./.\\.$.@.#.%.^.&.*.(.).-.{.}.[.].=.+.?.<.>.~.;._".split(".");
  BadLetters.forEach(function (element, index, array) {
    NormalString = NormalString.split(element).join(Holder);
  });
  return NormalString;
}

Cheture.ToClassicDate = function(timestamp) {
  let date = new Date();
  date.setTime(timestamp);
  date.setHours(date.getHours());
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();
  let ms = date.getMonth();
  let y = date.getFullYear();
  m = Cheture.utils.CheckTime(m);
  s = Cheture.utils.CheckTime(s);
  return h + ":" + m + ":" + s + " " + d + "." + ms + "." + y;
}

Cheture.Size = function(obj) {
    let objtype = typeof obj;
    if (objtype == "string") {
        return obj.length
    } else if (Array.isArray(obj)) {
        return Object.keys(obj).length
    } else {
        return
    }
}

// Extra functions

Cheture.Echo = function(text, parent = "ol", child = "li") {
    let line = document.createElement(child);
    line.innerText = text;
    let e = document.getElementById("echo");
    if (e == null) {
        let e = document.createElement(parent);
        document.body.appendChild(e);
        e.id = "echo";
        e.appendChild(line);        
    } else {
        e.appendChild(line);
    }
}

// Export

export {Cheture};