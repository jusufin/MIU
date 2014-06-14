//Emin Jusufi


var Emin = 
{	
	"Topics":
	{
		"Questions" : 
		[ 
		{"title":"Favorite Food", "Description": "If I had to choose a favorite food, I would say pizza. It's the only thing I can eat consistently. even bad pizza is good pizza!"},
		{"title":"Pets", "Description": "I own two cats that I found abandoned on a highway in winter. Someone had placed a box with the two baby kittens in the street at night. I originally just planned to get them somewhere safe, but after I brought them home, I couldn’t bring myself to part with them."}, 
		{"title":"Favorite Movies", "Description": "I like movies from all kinds of genres and places. I couldn’t really say what my favorite movie is since I have so many favorites."}, 
		{"title":"Favorite TV Shows", "Description": "I have two favorite shows at the moment, one being arrested development and the other Game of Thrones. I don’t like fantasy stuff like Game of Thrones usually, but its so well done that you can't help but get immersed in the show. As for arrested development, its one of my all time favorite shows that I can always go back and enjoy so I can't not include it.  "}, 
		{"title":"Job", "Description": "Currently, I work full time at my uncles restaurant and part time on a unity game that I am developing with friends."}
		],
	}
};

var count  = Object.keys(Emin.Topics.Questions).length; 


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

 var MainQ = Ti.UI.createTableViewSection
 ({
 	headerTitle: "About Me"
 });

 
var CS = [MainQ];


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
		title: this.title //this references object that called the function
	});
	
	
	var Dborder = Ti.UI.createView
	({
			backgroundColor: "#CFC8C4",
			top: 0
	});
	
	var DDescLabel = Ti.UI.createLabel
	({ 		
	 		top: 40,
	 		width: "100%",
	 		text: this.desc, //this references object that called the function
	 		color: "#323659",
	 		font: {fontSize: 20, fontFamily: "Futura" },
	 		textAlign: "center"
	 		
	});
	 
	
	
	Dborder.add(DDescLabel);
	detailWindow.add(Dborder );
	navWindow.openWindow(detailWindow);
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


for(var i=0, s = count; i<s; i++)
{
	var name = Emin.Topics.Questions[i];
	
	var theRow = Ti.UI.createTableViewRow
	({
		
		title: name.title,
		desc: name.Description , 
		hasChild: true
	});
	
	MainQ.add(theRow);
	theRow.addEventListener("click", getDetail);
}










//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



Characters.setData(CS);



