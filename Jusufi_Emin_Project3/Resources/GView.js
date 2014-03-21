//Emin Jusufi



var dWidth = Ti.Platform.displayCaps.platformWidth;
var dHeight = Ti.Platform.displayCaps.platformHeight;
var Items = 15;
var Rows = 3;
var Margin = 10;
var Images =
[
"M1.jpg","M2.jpg","M3.jpg","M4.jpg","M5.jpg","M6.jpg","M7.jpg","M8.jpg","M9.jpg","M10.jpg","M11.jpg",
"M1.jpg","M2.jpg","M3.jpg","M4.jpg","M5.jpg","M6.jpg","M7.jpg","M8.jpg","M9.jpg","M10.jpg","M11.jpg",
"M1.jpg","M2.jpg","M3.jpg","M4.jpg","M5.jpg","M6.jpg","M7.jpg","M8.jpg","M9.jpg","M10.jpg","M11.jpg"
];
var TrueCanvasWidth = "10%";
var size = (dWidth - (Margin * 5)) / 4  ;


var CreateGalleryWin = function()
{
	
	var mainWin2 = Ti.UI.createWindow
	({	
		navBarHidden:true,
		backgroundColor: "#3762B0",
	}); 


	var Button2 = Ti.UI.createView
	({
		bottom: 0,
		backgroundColor: "#3762B0",
		width:  "100%",
		height: 50
		
	});
	
	var ContainerM = Ti.UI.createScrollView
	(
		
	);
	var viewContainer = Ti.UI.createView
	({
		top: 20,
		width: dWidth,
		backgroundColor: "#26447C",
		layout: "horizontal"
	});


	for(var i = 0; i < Images.length; i++)
	{
		var view = Ti.UI.createView
		({
			backgroundColor: "#33CCFF",
			top: Margin,
			left: Margin,
			width: size,
			height: size
		});
		
		var Nimage = Ti.UI.createImageView
		({
			TT: true,
			image: "Stuff/" + Images[i],
			width:"90%",
			height:"90%"
		});
		
		view.add(Nimage);
		viewContainer.add(view);
	};
		
	ContainerM.add(viewContainer);	
	
	mainWin2.add(ContainerM, Button2);
 	
 	viewContainer.addEventListener('click', function(event)
 	{
 		
 		if (event.source.TT === true)
 		{
 			CreateImageWin(event.source.image);
 		}
 		
 	});
 	
 	Button2.addEventListener('click', function()
 	{
    	navWindow.closeWindow(mainWin2, {animated:true}); 
	});
 	
	navWindow.openWindow(mainWin2);
	
};


var CreateImageWin = function(ImData)
{
	
	var mainWin3 = Ti.UI.createWindow
	({	
		navBarHidden:true,
		backgroundColor: "#3762B0",
	}); 
	
	var Button3 = Ti.UI.createView
	({
		bottom: 0,
		backgroundColor: "#3762B0",
		width:  "100%",
		height: 50
		
	});
	
	var viewContainer = Ti.UI.createView
	({
		top: 20,
		Width: dWidth,
		backgroundColor: "#26447C",
		layout: "horizontal"
	});


	var ImageTS = Ti.UI.createImageView
	({
		image: ImData		
	});
	
	viewContainer.add(ImageTS);		
	mainWin3.add(viewContainer, Button3);
	
 	Button3.addEventListener('click', function()
 	{
    	navWindow.closeWindow(mainWin3, {animated:true}); 
	});
 	
 	
	navWindow.openWindow(mainWin3);

};




Button.addEventListener("click", CreateGalleryWin);












