
var CurrentWindow = Ti.UI.currentWindow;

//set nav controller to NavN by passing It through the WindowN property of GallerWin2
var NavN = CurrentWindow.WindowN;

var People = 
{	
	"GoodGuys":
	{
		"Gguys" : 
		[ 
			{
				"title":"Harry Dresden", 
			 	"Description": "Harry Blackstone Copperfield Dresden is a male human wizard, with a talent for thaumaturgy and alchemy working as a private investigator out of Chicago, USA. He is the protagonist and first person narrator of The Dresden Files series. As of Changes, he is 37 years old.",
			  	"Image": "H.jpg",
			  	"Courage": "85%"
		  	},
		
			{
				"title":"Bob", 
		 		"Description": "Bob is an air spirit of intellect who resides in a human skull owned by Harry. Before him, Bob was owned by Justin DuMorne, and before DuMorne, a powerful necromancer by the name of Heinrich Kemmler. Etienne the Enchanter originally picked Bob's skull up on the cheap, back in medieval France.",
			  	"Image": "B.jpg",
			  	"Courage": "30%"
			}, 
		
			{
				"title":"Karrin Murphy", 
		 		"Description": "Karrin Murphy is a human woman, and member of the Chicago Police Department at the Special Investigations division. Karrin makes an appearance in every book and is a prominent character in most of them.",
			  	"Image": "K.jpg",
			  	"Courage": "78%"
			}, 
		
			{
				"title":"Thomas Raith", 
				"Description": "Thomas Raith is introduced as a vampire of the White Court (an incubus) in Grave Peril. It is revealed in Blood Rites that Thomas is the half brother of Harry Dresden, the protagonist of the series, and, until Changes, Harry's only known living family.",
			  	"Image": "T.jpg",
			  	"Courage": "70%"
			}, 
		
			{
				"title":"Molly Carpenter", 
		 		"Description": "Margaret Katherine Amanda Carpenter, also called Molly, was a human wizard, now the Lady of the Winter Court of the Sidhe; she is the daughter of Michael and Charity Carpenter. Molly first appeared in Death Masks. She is first mentioned as Michael's eldest daughter in Grave Peril. ",
			  	"Image": "M.jpg",
			  	"Courage": "60%"
			}
		],
	},
};

var FileP = 1;
var count  = Object.keys(People.GoodGuys.Gguys).length; 


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var Characters = Ti.UI.createTableView
({
	top: 0
});


var MainCharacters = Ti.UI.createTableViewSection
({
 	headerTitle: "Main Characters",
 	footerTitle: "Books 1-6"
 });

var CharactersSections = [MainCharacters];

if (Ti.Platform.name === "iPhone OS")
 {
 	Characters.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
 };


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//uses event propogation to create specific bios with image view and courage meter 
var getDetail = function(DataS)
{
	
	
	
	var DetailWin = Ti.UI.createWindow
	({
		title: "Details",
		backgroundColor: "#474145"
	});		
	
	var ImageC = Ti.UI.createImageView
	({
			image: 	"Bios/" + DataS.image,	
			top: 0,
			left:0,
			width: "65%",
			height: "50%"
	});
	
	
	var BPer = Ti.UI.createView
	({
			backgroundColor: "#473226",
			top: 100,
			right: 10,
			height: 30,
			width: 80
	});
	
	var PerV = Ti.UI.createView
	({
			backgroundColor: "#474145",
			left: 2,
			height: "90%",
			width: DataS.CInd
			
	});
	
	var PerL = Ti.UI.createLabel
	({
			text: "Courage",
			top: 80,
			right: 60,
			color: "#FFFFFF",
 		    font: {fontSize: 12, fontFamily: "Futura" },			
	});
	
	var Dborder = Ti.UI.createView
	({
			backgroundColor: "#CFC8C4",
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
	
	BPer.add(PerV);
	
	Dborder.add(DLabel, ImageC, BPer,PerL);	
	
	DetailWin.add(Dborder);
	
    NavN.add(DetailWin);
    
    NavN.openWindow(DetailWin);
    
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//populate rows with json data
for(var i=0, s = count; i<s; i++)
{
	
	var name = People.GoodGuys.Gguys[i];
	
	var theRow = Ti.UI.createTableViewRow
	({
		
		title: name.title,
		image: name.Image,
		CInd: name.Courage , 
		desc: name.Description, 
		hasChild: true
	});
	
	MainCharacters.add(theRow);
	//theRow.addEventListener("click", getDetail);
}


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




Characters.setData(CharactersSections);


//Use Event Propogation to get Image and Description
Characters.addEventListener("click", function(event)
{
	getDetail(event.source);
	//console.log(event.source.image);
});

CurrentWindow.add(Characters);



