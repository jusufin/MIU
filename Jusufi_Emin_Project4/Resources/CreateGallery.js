

//populates array with Filesystem, Forgot to do last time
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Stuff");

var imageFiles = imagesFolder.getDirectoryListing();

var FileP = 0;

//sets Window to the current window in nav controller
var CurrentWindow = Ti.UI.currentWindow;


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var ImageBorder = Ti.UI.createView
({	
	
	backgroundColor: "#26447C",
	
    top: 0,
       
	width:  "100%",
	
	height: "70%"
	
});


var GalleryImage = Ti.UI.createImageView
({
	
	width: "90%",
	height: "90%",
	image: 	"Stuff/" + imageFiles[FileP]	
	
});


var FirstButton = Ti.UI.createView
({
	
	backgroundColor: "#26447C",
    Bottom: 0,
	width:  "100%",
	height: 80	
	
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var ButtonLabel = Ti.UI.createLabel
({			
	
	
	textAlign:'center',
	text: "Next Image",
	color: "#FFFFFF",
	font: {fontSize: 40, fontFamily: "Futura" },
	zIndex: 1	
	
	
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


//Uses FileP to Go through array with conditional to check if at end of array
var ChangeImage = function()
{
	
	FileP = FileP + 1;
	GalleryImage.image = "Stuff/" + imageFiles[FileP];
	
	if (FileP === (imageFiles.length - 1))
	{
		FileP = -1;	
	}
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


FirstButton.addEventListener("click", ChangeImage);

FirstButton.add(ButtonLabel);

ImageBorder.add(GalleryImage);

CurrentWindow.add(ImageBorder,FirstButton);


