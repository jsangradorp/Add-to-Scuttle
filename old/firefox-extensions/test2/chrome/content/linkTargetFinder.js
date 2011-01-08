var linkTargetFinder = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	return {
		init : function () {
			gBrowser.addEventListener("load", function () {
				var autoRun = prefManager.getBoolPref("extensions.linktargetfinder.autorun");
				if (autoRun) {
					linkTargetFinder.run();
				}
			}, false);
		},

		run : function () {
			var x = content.document;
			var a = encodeURIComponent(x.location.href);
			var t = encodeURIComponent(x.title);
			var d = encodeURIComponent(window.getSelection());
			open('http://scuttle.yokiyoki.com/scuttle/bookmarks.php/yokiyoki?action=add&popup=1&address='+a+'&title='+t+'&description='+d,'Scuttle','modal=1,status=0,scrollbars=1,toolbar=0,resizable=1,width=730,height=465,left='+(screen.width-730)/2+',top='+(screen.height-425)/2);
// 			var head = content.document.getElementsByTagName("head")[0],
// 				style = content.document.getElementById("link-target-finder-style"),
// 				allLinks = content.document.getElementsByTagName("a"),
// 				foundLinks = 0;
// 
// 			if (!style) {
// 				style = content.document.createElement("link");
// 				style.id = "link-target-finder-style";
// 				style.type = "text/css";
// 				style.rel = "stylesheet";
// 				style.href = "chrome://linktargetfinder/skin/skin.css";
// 				head.appendChild(style);
// 			}	
// 
// 			for (var i=0, il=allLinks.length; i<il; i++) {
// 				var elm = allLinks[i];
// 				if (elm.getAttribute("target")) {
// 					elm.className += ((elm.className.length > 0)? " " : "") + "link-target-finder-selected";
// 					foundLinks++;
// 				}
// 			}
// 			if (foundLinks === 0) {
// 				alert("No links found with a target attribute");
// 			}
// 			else {
// 				alert("Found " + foundLinks + " links with a target attribute");
// 			}
		}
	};
}();
window.addEventListener("load", linkTargetFinder.init, false);
