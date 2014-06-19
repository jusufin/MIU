var CurrentWindow = Ti.UI.currentWindow;


var Logo = Ti.UI.createImageView
({
	
	top: 20,
	height: 100,
	width: 100,
	image: 	"Stuff/DD.png" 
	
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

var Des = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "Emo Jobs has been an avid animal lover since childhood. He was a volunteer with the ASPCA for five years helping to find animals who were victims of abuse a safe home. He later decided to open an animal shelter of his own to help find abandoned animals a caring home.",
 		color: "#FFFFFF",
 		font: {fontSize: 20, fontFamily: "Futura" },
 		Top: 200,
 		zIndex: 1
 		
});


CurrentWindow.add(Logo,TopLabel,Des);
