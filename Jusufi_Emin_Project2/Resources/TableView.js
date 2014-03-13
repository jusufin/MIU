//Emin Jusufi
//3/10/2014


var Gguys = [ {title:"Harry Dresden"},{title:"Karrin Murphy"}, {title:"Bob"}, {title:"Karrin Murphy"}, {title:"Thomas Raith"}, {title:"Molly Carpenter"}];
var Bguys = [ {title:"Queen Mab"},{title:"Johnny Marcone"}, {title:"Aurora"}, {title:"Lasciel"}, {title:"Mavra"}, {title:"Nicodemus"}, {title:"Bianca St. Claire"}];

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

 var MainCharacters = Ti.UI.createTableViewSection
 ({
 	headerTitle: "Good Guys",
 	footerTitle: "Books 1-6"
 });


var MainVillians = Ti.UI.createTableViewSection
 ({
 	headerTitle: "Bad Guys",
 	footerTitle: "Books 1-6"
 });
 
var CharactersSections = [MainCharacters,MainVillians];


if (Ti.Platform.name === "iPhone OS")
 {
 	Characters.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
 };


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var getDetail = function()
{
	var detailWindow = Ti.UI.createWindow
	({
		backgroundColor: "#CCC2B3",
		
	});
	
	var DTitleView = Ti.UI.createView
	({
			backgroundColor: "#323659",
			height: 65,
			top: 0
	});
	
	var Dborder = Ti.UI.createView
	({
			backgroundColor: "#323659",
			height: 1,
			top: TitleView.height + TitleView.top
	});

	var DTitleLabel = Ti.UI.createLabel
	({ 		
	 		top: 30,
	 		width: "100%",
	 		text: this.title, //this references object that called the function
	 		color: "#CCC2B3",
	 		font: {fontSize: 26, fontFamily: "Futura" },
	 		textAlign: "center"
	});
	
	DTitleView.add(DTitleLabel);
	detailWindow.add(DTitleView, Dborder);
	detailWindow.open();
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


//loop through Gguys and add to row then add event listener
for(var i=0, s=Gguys.length; i<s; i++)
{
	var theRow = Ti.UI.createTableViewRow
	({
		title: Gguys[i].title,
		hasChild: true
	});
	
	MainCharacters.add(theRow);
	theRow.addEventListener("click", getDetail);
}

//loop through Bguys and add to row then add event listener
for(var i=0, s=Bguys.length; i<s; i++)
{
	var theRow2 = Ti.UI.createTableViewRow
	({
		title: Bguys[i].title,
		hasChild: true
	});

	
	MainVillians.add(theRow2);
	theRow2.addEventListener("click", getDetail);
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



Characters.setData(CharactersSections);

