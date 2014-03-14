//Emin Jusufi
//3/10/2014


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//creates window
var MainWindow = Ti.UI.createWindow
({	
}); 


//creates topmost view
var TitleView = Ti.UI.createView
({
		backgroundColor: "#323659",
		height: 65,
		top: 0
});


//Adds label to topmost view
var TitelLabel = Ti.UI.createLabel
({ 		
 		top: 30,
 		width: "100%",
 		text: "Dresden Files Bios",
 		color: "#CCC2B3",
 		font: {fontSize: 26, fontFamily: "Futura" },
 		textAlign: "center"
});


var border = Ti.UI.createView
({
		backgroundColor: "#323659",
		height: 1,
		top: TitleView.height + TitleView.top
});

var Characters = Ti.UI.createTableView
({
	top: border.top + border.height,
	// backgroundColor: "#CCC2B3"
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var LoadF = require("TableView");

TitleView.add(TitelLabel);
MainWindow.add(TitleView,border,Characters);
MainWindow.open();