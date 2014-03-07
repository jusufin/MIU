



var MainWindow = Ti.UI.createWindow({
	
	backgroundColor:"#FFF87C"

}); //creates window and sets backround color

var MainView = Ti.UI.createView({
		backgroundColor: "#FF637F",
		borderColor: "#B2334A",
		borderRadius: 5,
		borderWidth: 2,
		width: 300,
		height: 450,
		top: 30
});

var ButtonForward = Ti.UI.createButton({
		backgroundColor: "#3BA2CC",
		borderColor: "#3C90B2",
		borderRadius: 5,
		borderWidth: 2,
		width: 100,
		height: 60,
		bottom: 15,
		right: 10,
		

});

var ButtonBack = Ti.UI.createButton({
		backgroundColor: "#3BA2CC",
		borderColor: "#3C90B2",
		borderRadius: 5,
		borderWidth: 2,
		width: 100,
		height: 60,
		bottom: 15,
		left: 10,
		

});



MainWindow.add(MainView,ButtonForward,ButtonBack);
MainWindow.open();
