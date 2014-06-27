//Emin Jusufi


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var mainWin = Ti.UI.createWindow
({	
	
	title: "",
	backgroundColor: "#fff",
	navBarHidden : true
	
}); 


var navWindow = Ti.UI.iOS.createNavigationWindow
({
	
	window: mainWin
	
});


var BackgroundView = Ti.UI.createView
({
	
	backgroundColor: "#037DCC",
	width:"100%",
	height: "100%"
	
});




//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



var FirstButtonLabel = Ti.UI.createButton
({		
	
 		textAlign:'center',
 		bottom: 20,
 		title: "Calculate Credit",
 		color: "#FFFFFF",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var SecondButtonLabel = Ti.UI.createButton
({		
	
 		textAlign:'center',
 		title: "Calculate Payments",
 		bottom: 100,
 		color: "#FFFFFF",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var ThirdButtonLabel = Ti.UI.createButton
({ 		
		
 		textAlign:'center',
 		title: "Credit Tips",
 		bottom: 180,
 		color: "#FFFFFF",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
 		
});

var TopLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "Utility App",
 		color: "#FFFFFF",
 		font: {fontSize: 50, fontFamily: "Futura" },
 		Top: 80,
 		zIndex: 1
 		
});

var LineL = Ti.UI.createView
({
	
	backgroundColor: "#FFFFFF",
	width: TopLabel.width,
	height: 10,
	bottom: 0
});

var LineH = Ti.UI.createView
({
	
	backgroundColor: "#FFFFFF",
	width: TopLabel.width,
	height: 5,
	
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var CCMove = function()
{
	
	var Win = Ti.UI.createWindow
	({
		title: "",
		backgroundColor: "#FFFFFF",
		navBarHidden : true,
		url: "CP.js"
	});		
	
	navWindow.add(Win);
	navWindow.openWindow(Win);
	
};

var CPMove = function()
{
	
	
	var Win2 = Ti.UI.createWindow
	({
		title: "",
		backgroundColor: "#FFFFFF",
		navBarHidden : true,
		url: "CC.js",
		WindowN: navWindow
	});		
	
	navWindow.add(Win2);
	navWindow.openWindow(Win2);
	
};

var IMove = function()
{
	
	var Win3 = Ti.UI.createWindow
	({
		title: "Care Information",
		backgroundColor: "#FFFFFF",
		navBarHidden : true,
		url: "Pets.js",
		WindowN: navWindow
	});		
	
	navWindow.add(Win3);
	navWindow.openWindow(Win3);
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


ThirdButtonLabel.addEventListener("click", IMove);
SecondButtonLabel.addEventListener("click", CPMove);
FirstButtonLabel.addEventListener("click", CCMove);

mainWin.add(BackgroundView,FirstButtonLabel,SecondButtonLabel,ThirdButtonLabel,TopLabel,LineL);
navWindow.open();
