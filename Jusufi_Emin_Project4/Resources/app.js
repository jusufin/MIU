//Emin Jusufi
//3/26/2014
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var mainWin = Ti.UI.createWindow
({	
	
	title: "New",
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
    top: 0,
	width:  "100%",
	height: 80
	
});


var SecondButton = Ti.UI.createView
({
	
	backgroundColor: "#473226",
    top: FirstButton.height,
	width:  "100%",
	height: 80
	
});


var ThirdButton = Ti.UI.createView
({
	
	backgroundColor: "#B23352",
    top: FirstButton.height + SecondButton.height,
	width:  "100%",
	height: 80
	
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var FirstButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "Gallery",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var SecondButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "Bios",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var ThirdButtonLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "Custom",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var BottomLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "VFW Term 1403//Emin Jusufi",
 		color: "#FFFFFF",
 		font: {fontSize: 20, fontFamily: "Futura" },
 		bottom: 50,
 		zIndex: 1
 		
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var FirstWinMove = function()
{
	
	var GalleryWin = Ti.UI.createWindow
	({
		backgroundColor: "#474145",
		url: "CreateGallery.js"
	});		
	
	navWindow.add(GalleryWin);
	navWindow.openWindow(GalleryWin);
	
};

var SecondWinMove = function()
{
	
	
	var GalleryWin2 = Ti.UI.createWindow
	({
		backgroundColor: "#474145",
		url: "CreateBios.js",
		WindowN: navWindow
	});		
	
	navWindow.add(GalleryWin2);
	navWindow.openWindow(GalleryWin2);
	
};

var ThirdWinMove = function()
{
	
	var GalleryWin3 = Ti.UI.createWindow
	({
		backgroundColor: "#474145",
		url: "CreateCustom.js"
	});		
	
	navWindow.add(GalleryWin3);
	navWindow.openWindow(GalleryWin3);
	
};

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////





FirstButton.add(FirstButtonLabel);
SecondButton.add(SecondButtonLabel);
ThirdButton.add(ThirdButtonLabel);

ThirdButton.addEventListener("click", ThirdWinMove);
SecondButton.addEventListener("click", SecondWinMove);
FirstButton.addEventListener("click", FirstWinMove);

mainWin.add(BackgroundView,FirstButton,SecondButton,ThirdButton,BottomLabel);
navWindow.open();
