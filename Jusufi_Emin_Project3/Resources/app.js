//Emin Jusufi
//3/20/2014



var mainWin = Ti.UI.createWindow
({	
	navBarHidden:true,
	backgroundColor: "#fff",
	
}); 


var navWindow = Ti.UI.iOS.createNavigationWindow
({
	window: mainWin
});

var Back = Ti.UI.createView
({
	
	backgroundColor: "#3762B0",
	width:"100%",
	height: "100%"
	
});

var Back2 = Ti.UI.createView
({
	backgroundColor: "#CC9F3F",
	top: 100,
	width:"100%",
	height: 100
	
});

var Button = Ti.UI.createView
({
	
	backgroundColor: "#26447C",
    bottom: 100,
	width:  "100%",
	height: 50
	
});


var BLabel = Ti.UI.createLabel
({
 		
 		textAlign:'center',
 		text: "Gallery",
 		color: "#3762B0",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
});

var MLabel = Ti.UI.createLabel
({
 		
 		text: "Gallery Viewer",
 		textAlign:'center',
 		color: "#3762B0",
 		font: {fontSize: 50, fontFamily: "Futura" },
 		zIndex: 1
});







//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



var LoadF = require("GView");

Back2.add(MLabel);
Button.add(BLabel);
mainWin.add(Back,Back2,Button);
navWindow.open();











