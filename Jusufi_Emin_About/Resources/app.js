//Emin Jusufi

//creates window
var MainWindow = Ti.UI.createWindow
({	
	title: "About Me"
}); 

var navWindow = Ti.UI.iOS.createNavigationWindow
({
	window: MainWindow
});

var border = Ti.UI.createView
({
		backgroundColor: "#323659",
		height: 1,
		top: 0
});

var Characters = Ti.UI.createTableView
({
	top: border.top + border.height,
	// backgroundColor: "#CCC2B3"
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var LoadF = require("JSON");


MainWindow.add(border,Characters);
navWindow.open();