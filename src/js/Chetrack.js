// By Kiselev Nikolay
// 2018
// Cheture javascript web lib


let Chetrack = {};

Chetrack.getID = function() {
	let isNewUser = sessionStorage.getItem('amInew') || false;
	let UserID = localStorage.getItem("userId") || `${(navigator.oscpu||"UnKnown").split(" ")[0]}[${Math.floor(Math.random()*9876543210)}]`;
	if (!isNewUser) {
		sessionStorage.setItem('amInew', true);
		localStorage.setItem("userId", UserID);
	}
	return UserID
}

Chetrack.forceID = function() {
	let UserID = `${(navigator.oscpu||"UnKnown").split(" ")[0]}[${Math.floor(Math.random()*9876543210)}]`;
	sessionStorage.setItem('amInew', true);
	localStorage.setItem("userId", UserID);
	return UserID
}


export {Chetrack};
