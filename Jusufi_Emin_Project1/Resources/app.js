//Emin Jusufi
//03/7/2014


var Margin = 15;

var MainWindow = Ti.UI.createWindow({
	
	backgroundColor:"#FFF87C"

}); //creates window and sets backround color

var MainView = Ti.UI.createView({
		backgroundColor: "#FF637F",
		borderColor: "#B2334A",
		borderRadius: 5,
		borderWidth: 2,
		width: 300,
		height: 450,
		top: 30
});


var QuoteLabel = Ti.UI.createLabel({
 		
 		top: 20,
 		left: 20,
 		right: 20,
 		text: "Quote",
 		color: "#FFF87C",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
});



var ForwardT = Ti.UI.createLabel({
 		
 		top: 10,
 		text: "Forward",
 		color: "#FFF87C",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
});


var BackT = Ti.UI.createLabel({
 		
 		top: 10,
 		text: "Back",
 		color: "#FFF87C",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
});


var ButtonForward = Ti.UI.createView({
		backgroundColor: "#3BA2CC",
		borderColor: "#3C90B2",
		borderRadius: 5,
		borderWidth: 2,
		width: 130,
		height: 60,
		top: MainView.top + MainView.height + Margin, //changed for testing
		right: 10
		
});

var ButtonBack = Ti.UI.createView({
		backgroundColor: "#3BA2CC",
		borderColor: "#3C90B2",
		borderRadius: 5,
		borderWidth: 2,
		width: 130,
		height: 60,
		top: MainView.top + MainView.height + Margin, //changed for testing
		left: 10
		
});






var LoadF = require("ChangeQuote");

MainWindow.add( MainView, ButtonForward, ButtonBack);
MainView.add(QuoteLabel);
ButtonForward.add(ForwardT);
ButtonBack.add(BackT);
MainWindow.open();

