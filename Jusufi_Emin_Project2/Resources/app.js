//Emin Jusufi
//3/10/2014


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//creates window
var MainWindow = Ti.UI.createWindow
({	
	title: "The Dresden Files"
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


var LoadF = require("TableView");


MainWindow.add(border,Characters);
navWindow.open();