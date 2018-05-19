function checkBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1 ) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';
    } else {
        return 'unknown';
    }
}


/////////////////////////////////

export function build(argument) {
	alert(SizeDict({r:"r"}));
}

export function user() {
	let isNewUser = sessionStorage.getItem('amInew') || false;
	if (!isNewUser) {
	    sessionStorage.setItem('amInew', true);
	    let UserID = localStorage.getItem("userId") || `${checkBrowser()}.${navigator.platform}.${Math.floor(Math.random()*1000000000)}`;
	    localStorage.setItem("userId", UserID);
	}
	return isNewUser, localStorage.getItem("userId")
}