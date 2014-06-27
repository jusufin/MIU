var CurrentWindow = Ti.UI.currentWindow;

//First Input/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var FieldOne = Ti.UI.createTextField
({
		   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		   color: '#336699',
		   width: 150, 
		   height: 30,
		   top: "39%",
		   left: 150
});

var ViewOne = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width:40,
			height: 30,
			top: "39%",
			left: 115
	
});

var LabelOne = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "$",
	 		color: "#FFFFFF",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		zIndex: 1
 		
});

var TextOne = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "Loan Amount: ",
	 		color: "#037DCC",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		top: "40%",
	 		left:20,
	 		zIndex: 1
 		
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//Second Input/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var FieldTwo = Ti.UI.createTextField
({
		   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		   color: '#336699',
		   width: 80, 
		   height: 30,
		   top: "49%",
		   left: 115
});

var ViewTwo = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width:40,
			height: 30,
			top: "49%",
			left: 190
	
});

var LabelTwo = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "Months",
	 		color: "#FFFFFF",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		zIndex: 1
 		
});

var TextTwo = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "Loan Term: ",
	 		color: "#037DCC",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		top: "50%",
	 		left:20,
	 		zIndex: 1
 		
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//Third Input/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var FieldThree = Ti.UI.createTextField
({
		   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		   color: '#336699',
		   width: 80, 
		   height: 30,
		   top: "59%",
		   left: 115
});

var ViewThree = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width:40,
			height: 30,
			top: "59%",
			left: 190
	
});

var LabelThree = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "%",
	 		color: "#FFFFFF",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		zIndex: 1
 		
});

var TextThree = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "Interest Rate: ",
	 		color: "#037DCC",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		top: "60%",
	 		left:20,
	 		zIndex: 1
 		
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//Fourth Input/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var FieldFour = Ti.UI.createTextField
({
		   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		   color: '#336699',
		   width: 80, 
		   height: 30,
		   top: "69%",
		   enabled : false,
		   left: 150
});

var ViewFour = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width:40,
			height: 30,
			top: "69%",
			left: 115
	
});

var LabelFour = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "%",
	 		color: "#FFFFFF",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		zIndex: 1
 		
});

var TextFour = Ti.UI.createLabel
({ 		
		
	 		textAlign:'center',
	 		text: "Monthly Payments: ",
	 		color: "#037DCC",
	 		font: {fontSize: 15, fontFamily: "Futura" },
	 		top: "70%",
	 		left:20,
	 		zIndex: 1
 		
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////




var CButton = Ti.UI.createButton
({ 		
		
 		textAlign:'center',
 		title: "Calculate",
 		top: "80%",
 		color: "#037DCC",
 		font: {fontSize: 30, fontFamily: "Futura" },
 		zIndex: 1
 		
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





var LineL = Ti.UI.createView
({
	
			backgroundColor: "#037DCC",
			width: "100%",
			height: 10,
			bottom: 0
});




ViewOne.add(LabelOne);
ViewTwo.add(LabelTwo);
ViewThree.add(LabelThree);
ViewFour.add(LabelFour);

BButton.addEventListener('click', function()
{
	
    CurrentWindow.close();
    	
});



CurrentWindow.add
(
	TextOne, TextTwo, TextThree, TextFour,
	FieldOne, FieldTwo, FieldThree, FieldFour,
	LineL, CButton, BButton,
	ViewOne , ViewTwo, ViewThree, ViewFour
);
