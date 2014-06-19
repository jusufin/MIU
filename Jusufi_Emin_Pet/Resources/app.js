//Emin Jusufi


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var mainWin = Ti.UI.createWindow
({	
	
	title: "Main",
	backgroundColor: "#fff"
	
}); 


var navWindow = Ti.UI.iOS.createNavigationWindow
({
	
	window: mainWin
	
});


var BackgroundView = Ti.UI.createView
({
	
	backgroundColor: "#474145",
	width:"100%",
	height: "100%"
	
});


var FirstButton = Ti.UI.createView
({
	
	backgroundColor: "#26447C",
    bottom: 0,
	width:  "100%",
	height: 80
	
});


var SecondButton = Ti.UI.createView
({
	
	backgroundColor: "#473226",
    bottom: FirstButton.height,
	width:  "100%",
	height: 80
	
});


var ThirdButton = Ti.UI.createView
({
	
	backgroundColor: "#B23352",
    bottom: FirstButton.height + SecondButton.height,
	width:  "100%",
	height: 80
	
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var Logo = Ti.UI.createImageView
({
	
	top: 20,
	height: 100,
	width: 100,
	image: 	"Stuff/DD.png" 
	
});


var FirstButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "About Us",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var SecondButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "Our Pets",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var ThirdButtonLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "Care Information",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var BottomLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "MIU Term 1406//Emin Jusufi",
 		color: "#FFFFFF",
 		font: {fontSize: 10, fontFamily: "Futura" },
 		bottom: 0,
 		zIndex: 1
 		
});
var TopLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "County Animal Shelter",
 		color: "#FFFFFF",
 		font: {fontSize: 20, fontFamily: "Futura" },
 		Top: 80,
 		zIndex: 1
 		
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var AboutMove = function()
{
	
	var Win = Ti.UI.createWindow
	({
		title: "Gallery",
		backgroundColor: "#474145",
		url: "About.js"
	});		
	
	navWindow.add(Win);
	navWindow.openWindow(Win);
	
};

var PetMove = function()
{
	
	
	var Win2 = Ti.UI.createWindow
	({
		title: "Pets",
		backgroundColor: "#474145",
		url: "Pets.js",
		WindowN: navWindow
	});		
	
	navWindow.add(Win2);
	navWindow.openWindow(Win2);
	
};

var InfoMove = function()
{
	
	var Win3 = Ti.UI.createWindow
	({
		title: "Care Information",
		backgroundColor: "#474145",
		url: "InfoP.js",
		WindowN: navWindow
	});		
	
	navWindow.add(Win3);
	navWindow.openWindow(Win3);
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////





FirstButton.add(FirstButtonLabel);
SecondButton.add(SecondButtonLabel);
ThirdButton.add(ThirdButtonLabel);

ThirdButton.addEventListener("click", InfoMove);
SecondButton.addEventListener("click", PetMove);
FirstButton.addEventListener("click", AboutMove);

mainWin.add(BackgroundView,FirstButton,SecondButton,ThirdButton,BottomLabel, Logo, TopLabel);
navWindow.open();

