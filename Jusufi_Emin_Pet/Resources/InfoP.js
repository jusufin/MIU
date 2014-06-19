var CurrentWindow = Ti.UI.currentWindow;


var NavN = CurrentWindow.WindowN;

var InfoPP = 
{	
	"Pets":
	{
		"CD" : 
		[ 
			{
				"title":"Adoption Basics", 
			 	"Description": "Here we will talk about general adoption topics",
			  			
		  	},
		
			{
				"title":"General Care For Dogs", 
		 		"Description": "Here we will discuss general care for dogs.",
			  	"Image": "B.jpg",			  	
			}, 
		
			{
				"title":"General Care For Cats", 
		 		"Description": "Here we will discuss general care for cats",			  	
			}, 
		
			{
				"title":"Adoption Fees", 
				"Description": "Here we will discuss general expenses and our fees for owning an animal",		  	
			}, 
		
			{
				"title":"Appendixes", 
		 		"Description": "Topics Appendixes",
			},
			
			{
				"title":"References", 
		 		"Description": "Topics References",
			}
		],
	},
};

var FileP = 1;
var count  = Object.keys(InfoPP.Pets.CD).length; 


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




var MaPets = Ti.UI.createTableView
({
	bottom: 0,
	backgroundColor: "#474145"
});


var AvPets = Ti.UI.createTableViewSection
({
 	
});

var CS = [AvPets];

if (Ti.Platform.name === "iPhone OS")
 {
 	MaPets.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
 };


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//uses event propogation 
var getDetail = function(DataS)
{
	
	var DetailWin = Ti.UI.createWindow
	({
		title: "Details",
		backgroundColor: "#474145"
	});		
	
	
	var Dborder = Ti.UI.createView
	({
			backgroundColor: "#474145",
			top: 0
	});
	
	var DLabel = Ti.UI.createLabel
	({
			
	 		bottom: 40,
	 		
	 		width: "100%",
	 		
	 		text: DataS.desc, //this references object that called the function
	 		
	 		color: "#FFFFFF",
	 		
	 		font: {fontSize: 20, fontFamily: "Futura" },
	 		
	 		textAlign: "center"
	 		
	});
	

	
	Dborder.add(DLabel);	
	
	DetailWin.add(Dborder);
	
    NavN.add(DetailWin);
    
    NavN.openWindow(DetailWin);
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//populate rows with json data
for(var i=0, s = count; i<s; i++)
{
	
	var name = InfoPP.Pets.CD[i];
	
	var theRow = Ti.UI.createTableViewRow
	({
		color: "#FFFFFF",
		font:{fontSize: 20, fontFamily: "Futura"},
		title: name.title,
		desc: name.Description, 
		hasChild: true
	});
	
	AvPets.add(theRow);
}


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

MaPets.setData(CS);

//Use Event Propogation to get Image and Description
MaPets.addEventListener("click", function(event)
{
	getDetail(event.source);
});






CurrentWindow.add(MaPets);





