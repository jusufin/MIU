//Emin Jusufi
//3/10/2014
var People = 
{	
	"GoodGuys":
	{
		"Gguys" : 
		[ 
		{"title":"Harry Dresden", "Description": "Harry Blackstone Copperfield Dresden is a male human wizard, with a talent for thaumaturgy and alchemy working as a private investigator out of Chicago, USA. He is the protagonist and first person narrator of The Dresden Files series. As of Changes, he is 37 years old."},
		{"title":"Bob", "Description": "Bob is an air spirit of intellect who resides in a human skull owned by Harry. Before him, Bob was owned by Justin DuMorne, and before DuMorne, a powerful necromancer by the name of Heinrich Kemmler. Etienne the Enchanter originally picked Bob's skull up on the cheap, back in medieval France."}, 
		{"title":"Karrin Murphy", "Description": "Karrin Murphy is a human woman, and member of the Chicago Police Department at the Special Investigations division. Karrin makes an appearance in every book and is a prominent character in most of them."}, 
		{"title":"Thomas Raith", "Description": "Thomas Raith is introduced as a vampire of the White Court (an incubus) in Grave Peril. It is revealed in Blood Rites that Thomas is the half brother of Harry Dresden, the protagonist of the series, and, until Changes, Harry's only known living family."}, 
		{"title":"Molly Carpenter", "Description": "Margaret Katherine Amanda Carpenter, also called Molly, was a human wizard, now the Lady of the Winter Court of the Sidhe; she is the daughter of Michael and Charity Carpenter. Molly first appeared in Death Masks. She is first mentioned as Michael's eldest daughter in Grave Peril. "}
		],
	},
	
	"BadGuys":
	{
		"Bguys" : 
		[ 
		{"title":"Queen Mab", "Description": "Also known as the Queen of Air and Darkness, Mab is easily one the most powerful beings currently encountered in the books. The daughter of Mother Winter and the mother of Maeve, Mab has demonstrated her immense power both by performing great feats of magic with little or no effort and in her ways of punishing those who have dishonored her."},
		{"title":"Johnny Marcone", "Description": "John Marcone is the most powerful crime boss in Chicago and an antagonist of Dresden's, though the two have worked together far more often than they have opposed each other. This has largely been due to some supernatural predator or villain causing collateral damage to Marcone's industry and him relying on Dresden to deal with the problem, but Harry has asked for Marcone's help at least twice. Marcone controls the majority of organized crime in Chicago and has developed considerable knowledge of the supernatural aspects of the city."}, 
		{"title":"Aurora", "Description": "She was the Summer Lady, daughter of Titania. First appearing in Summer Knight, she takes Elaine after she is wounded by Lloyd Slate, the Winter Knight. She took care of Elaine, and sat to talk to Harry. He noted her kindness and her gentleness. However, at a later time in the book, it is discovered that she is the one who kidnapped Lily, encasing her in stone. She steals the Unraveling Harry obtained from Mother Winter, and started the War at the Table. "}, 
		{"title":"Lasciel", "Description": "Also known as The Temptress, The Seducer and Webweaver, Lasciel is one of thirty fallen angels that comprise the Order of the Blackened Denarius, demon spirits that are contained within thirty silver coins, each bearing the particular sigil representing the entombed demon's name. "}, 
		{"title":"Mavra", "Description": "She is one of the few surviving members of the Black Court and, therefore, one of the most powerful and fearsome creatures in the vampire community. In addition to her supernatural powers as a vampire, she is as skilled in the use of magic as a full-fledged wizard and has been a threat to Dresden a few times throughout the novels since her introduction in Grave Peril. "}, 
		{"title":"Nicodemus", "Description": "Also known as Nicodemus Archleone, a reference to 1 Peter 5:8. Described by Harry as the most dangerous man he's ever met, Nicodemus is every bit the threat he appears: while most evil characters manage to appear in a somewhat gray area at times, Nicodemus is as bad as it gets. This could be attributed to the fact that the only characters who have described him in the books are all Catholic clergy. The oldest and most powerful of the Denarians, he is possessed by the fallen angel Anduriel, one of Lucifer's captains."}, 
		{"title":"Bianca St. Claire", "Description": "Bianca, like all her kind, is actually a repulsive monster inside the flesh of a beautiful woman. Harry earned her wrath by coming armed into her house during the investigation of one of her prostitutes' deaths, which climaxed with him attacking her with a handkerchief filled with sunshine. "}
		]
}
};

var count  = Object.keys(People.GoodGuys.Gguys).length; 
var countB = Object.keys(People.BadGuys.Bguys).length; 

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
	var name = People.GoodGuys.Gguys[i];
	
	var theRow = Ti.UI.createTableViewRow
	({
		
		title: name.title,
		desc: name.Description , 
		hasChild: true
	});
	
	MainCharacters.add(theRow);
	theRow.addEventListener("click", getDetail);
}


//loop through Bguys and add to row then add event listener
for(var i=0, s = countB; i<s; i++)
{
	var name = People.BadGuys.Bguys[i];
	
	var theRow2 = Ti.UI.createTableViewRow
	({		
		title: name.title,
		desc: name.Description,
		hasChild: true
	});

	
	MainVillians.add(theRow2);
	theRow2.addEventListener("click", getDetail);
}






//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



Characters.setData(CharactersSections);








