var add_to_scuttle = {

    run: function() {

        var doc = window.top.getBrowser().selectedBrowser.contentWindow.document;
        alert(doc.title);

    },

    showAbout: function() {

        alert("Add to Scuttle, created by Yokiyoki");

    },

    goHome: function() {

        var win = window.top.getBrowser().selectedBrowser.contentWindow;
        win.open("http://scuttle.yokiyoki.com/scuttle");

    }

}