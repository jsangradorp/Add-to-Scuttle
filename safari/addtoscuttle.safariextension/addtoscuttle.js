function openScuttlePopup(event) {
	if (event.name === "openScuttlePopup") {
		var x = document;
		var a = encodeURIComponent(x.location.href);
		var t = encodeURIComponent(x.title);
		var d = encodeURIComponent(window.getSelection() + ''); /* The "+ ''" is needed because of a browser bug */
		window.open(event.message[0]+'/'+event.message[1]+'?action=add&popup=1&address='+a+'&title='+t+'&description='+d,'Scuttle','modal=1,status=0,scrollbars=1,toolbar=0,resizable=1,width=730,height=465,left='+(screen.width-730)/2+',top='+(screen.height-425)/2);
	}
}

safari.self.addEventListener("message", openScuttlePopup, false);

