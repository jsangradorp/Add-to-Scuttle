var addToScuttle = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	var postUrl = "";
	var username = "";
	return {
		init : function () {
			gBrowser.addEventListener("load", function () {
				postUrl = prefManager.getCharPref("extensions.addtoscuttle.posturl");
				username = prefManager.getCharPref("extensions.addtoscuttle.username");

			}, false);
		},

		run : function () {
			var x = content.document;
			var a = encodeURIComponent(x.location.href);
			var t = encodeURIComponent(x.title);
			var d = encodeURIComponent(window.getSelection());
			open(postUrl+'/'+username+'?action=add&popup=1&address='+a+'&title='+t+'&description='+d,'Scuttle','modal=1,status=0,scrollbars=1,toolbar=0,resizable=1,width=730,height=465,left='+(screen.width-730)/2+',top='+(screen.height-425)/2);
		}
	};
}();
window.addEventListener("load", addToScuttle.init, false);
