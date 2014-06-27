
var CurrentWindow = Ti.UI.currentWindow;

//set nav controller to NavN by passing It through the WindowN property of Win2
var NavN = CurrentWindow.WindowN;

var Tips = 
{	
	"P":
	{
		"C" : 
		[ 
			{
				"title":"Check Your Credit Report", 
			 	"Description": "Credit score repair begins with your credit report. If you haven't already, request a free copy of your credit report and check it for errors. ",
			  	"Image": "G.jpg",			
		  	},
		
			{
				"title":"Setup Payment Reminders", 
		 		"Description": " Making your credit payments on time is one of the biggest contributing factors to your credit score.",
			  	"Image": "S.jpg",			  	
			}, 
		
			{
				"title":"Reduce the Amount of Debt You Owe", 
		 		"Description": "This is easier said than done, but reducing the amount that you owe is going to be a far more satisfying achievement than improving your credit score. ",
			  	"Image": "Sc.jpg",			  	
			}, 
		
			{
				"title":"Pay your bills on time.", 
				"Description": "Delinquent payments, even if only a few days late, and collections can have a major negative impact on your FICO score.",
			  	"Image": "P.jpg",			  	
			}, 

		],
	},
};

var FileP = 1;
var count  = Object.keys(Tips.P.C).length; 


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var TipT = Ti.UI.createTableView
({
	top: "50%",
	Bottom: 40,
	backgroundColor: "#FFFFFF"
});


var ATT = Ti.UI.createTableViewSection
({
 	
});

var CS = [ATT];

if (Ti.Platform.name === "iPhone OS")
 {
 	TipT.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
 };


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//uses event propogation 
var getDetail = function(DataS)
{
	
	
	
	var DetailWin = Ti.UI.createWindow
	({
		title: "Details",
		navBarHidden : true,
		backgroundColor: "#FFFFFF"
	});		
	
	var BButton2 = Ti.UI.createButton
	({ 		
			
	 		textAlign:'left',
	 		title: "<Done",
	 		bottom: 20,
	 		left: 0,
	 		color: "#037DCC",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		zIndex: 1
	 		
	});
	
	
	BButton2.addEventListener('click', function()
	{
		
	    DetailWin.close();
	    	
	});

	
	
	var ImageC = Ti.UI.createImageView
	({
			image: 	"Stuff/" + DataS.image,	
			top: 30,
	});

	var Dborder = Ti.UI.createView
	({
			backgroundColor: "#FFFFFF",
			top: 0
	});
	
	var DLabel = Ti.UI.createLabel
	({
			
	 		bottom: 60,
	 		
	 		width: "80%",
	 		
	 		text: DataS.desc, //this references object that called the function
	 		
	 		color: "#037DCC",
	 		
	 		font: {fontSize: 20, fontFamily: "Futura" },
	 		
	 		textAlign: "center"
	 		
	});
	
	var LineL2 = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width: "100%",
			height: 10,
			bottom: 0
});

	
	Dborder.add(DLabel, ImageC);	
	
	DetailWin.add(Dborder, BButton2 , LineL2);
	
    NavN.add(DetailWin);
    
    NavN.openWindow(DetailWin);
    
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//populate rows with json data
for(var i=0, s = count; i<s; i++)
{
	
	var name = Tips.P.C[i];
	
	var theRow = Ti.UI.createTableViewRow
	({
		color: "#037DCC",
		font:{fontSize: 20, fontFamily: "Futura"},
		title: name.title,
		image: name.Image, 
		desc: name.Description, 
		hasChild: true
	});
	
	ATT.add(theRow);
}


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

TipT.setData(CS);

//Use Event Propogation to get Image and Description
TipT.addEventListener("click", function(event)
{
	getDetail(event.source);
});

var BButton = Ti.UI.createButton
({ 		
		
 		textAlign:'left',
 		title: "<Done",
 		bottom: 20,
 		left: 0,
 		color: "#037DCC",
 		font: {fontSize: 15, fontFamily: "Futura" },
 		zIndex: 1
 		
});


BButton.addEventListener('click', function()
{
	
    CurrentWindow.close();
    	
});

var LineL = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width: "100%",
			height: 10,
			bottom: 0
});





CurrentWindow.add(TipT, BButton, LineL);



