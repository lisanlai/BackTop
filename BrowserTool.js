BrowserTool = Tool = function(){
	
	userAgent = navigator.userAgent.toLowerCase();
	
	check = function(regex){
		return regex.test(userAgent);
	};
	
	version = function (is, regex) {
		var m;
		return (is && (m = regex.exec(userAgent))) ? parseFloat(m[1]) : 0;
	};
	
	isStrict = document.compatMode == "CSS1Compat";
	docMode = document.documentMode;
	isOpera = check(/opera/);
	isOpera10_5 = isOpera && check(/version\/10\.5/);
	isChrome = check(/\bchrome\b/);
	isWebKit = check(/webkit/);
	isSafari = !isChrome && check(/safari/);
	isSafari2 = isSafari && check(/applewebkit\/4/); 
	isSafari3 = isSafari && check(/version\/3/);
	isSafari4 = isSafari && check(/version\/4/);
	isSafari5_0 = isSafari && check(/version\/5\.0/);
	isSafari5 = isSafari && check(/version\/5/);
	isIE = !isOpera && check(/msie/);
	isIE7 = isIE &&((check(/msie 7/) && docMode != 8 && docMode != 9) || docMode == 7);
	isIE8 = isIE &&((check(/msie 8/) && docMode != 7 && docMode != 9) || docMode == 8);
	isIE9 = isIE &&((check(/msie 9/) && docMode != 7 && docMode != 8) || docMode == 9);
	isIE6 = isIE && check(/msie 6/);
	isGecko = !isWebKit && check(/gecko/);
	isGecko3 = isGecko && check(/rv=1\.9/);
	isGecko4 = isGecko && check(/rv=2\.0/);
	isGecko5 = isGecko && check(/rv=5\./);
	isGecko10 = isGecko && check(/rv=10\./);
	isFF3_0 = isGecko3 && check(/rv=1\.9\.0/);
	isFF3_5 = isGecko3 && check(/rv=1\.9\.1/);
	isFF3_6 = isGecko3 && check(/rv=1\.9\.2/);
	isWindows = check(/windows|win32/);
	isMac = check(/macintosh|mac os x/);
	isLinux = check(/linux/);
	scrollbarSize = null;
	chromeVersion = version(true, /\bchrome\/(\d+\.\d+)/);
	firefoxVersion = version(true, /\bfirefox\/(\d+\.\d+)/);
	ieVersion = version(isIE, /msie (\d+\.\d+)/);
	operaVersion = version(isOpera, /version\/(\d+\.\d+)/);
	safariVersion = version(isSafari, /version\/(\d+\.\d+)/);
	webKitVersion = version(isWebKit, /webkit\/(\d+\.\d+)/);
	isSecure = /^https/i.test(window.location.protocol);
	
	return {
		isStrict : isStrict,
		docMode : docMode,
		isOpera : isOpera,
		isOpera10_5 : isOpera10_5,
		isChrome : isChrome,
		isWebKit : isWebKit,
		isSafari : isSafari,
		isSafari2 : isSafari2,
		isSafari3 : isSafari3,
		isSafari4 : isSafari4,
		isSafari5_0 : isSafari5_0,
		isSafari5 : isSafari5,
		isIE : isIE,
		isIE7 : isIE7,
		isIE8 : isIE8,
		isIE9 : isIE9,
		isIE6 : isIE6,
		isGecko : isGecko,
		isGecko3 : isGecko3,
		isGecko4 : isGecko4,
		isGecko5 : isGecko5,
		isGecko10 : isGecko10,
		isFF3_0 : isFF3_0,
		isFF3_5 : isFF3_5,
		isFF3_6 : isFF3_6,
		isWindows : isWindows,
		isMac : isMac,
		isLinux : isLinux,
		scrollbarSize : scrollbarSize,
		chromeVersion : chromeVersion,
		firefoxVersion : firefoxVersion,
		ieVersion : ieVersion,
		operaVersion : operaVersion,
		safariVersion : safariVersion,
		webKitVersion : webKitVersion,
		isSecure : isSecure
	};
}();