

// QUOTE ARRAY
var Quote = [
"Your mind needs exercise just as much as your body does, that's why I think of jogging every day.", 
"Chuck Norris has a bear carpet in his house, the bear isn't dead its just afraid to move." , 
"The secret to happiness is not to do what makes you happy, it's to be happy doing what you're already doing.", 
"I'm old enough to know better, but young enough to do it anyway.", 
"Why do gorillas have big nostrils? Because they have thick fingers.", 
"Life is a pretty cheezy game, but at least it has good graphics.",
"When I was in high school I had two favorite subjects, lunch and recess."
];


var LengthA = Quote.length; //SETS ARRAY LENGTH TO LENGTHA 
var Check = 0; 
var BTrigger = false;
var FTrigger = false;

var FQuote = function () 
{
	
		BTrigger = true; //CHECKS IF OTHER BUTTON HAS BEEN PRESSED BEFORE
		
		if(FTrigger == true)//IF IT HAS THEN THIS IS THE FIRST TIME IN THIS DIRECTION SO STEP BY 2
		{
			Check = Check + 2;
			FTrigger = false;
		}
		
		if(Check == LengthA)
		{		
			Check = 0;		
		}
		
		QuoteLabel.text = Quote[Check];
		Check = Check + 1;	//ADDS ONE TO CHECK TO STEP FORWARD
		
};

var BQuote = function () 
{
	
		FTrigger = true;
		
		if(BTrigger == true)
		{	
			
			Check = Check - 2;
			
			BTrigger = false;
		}
				
		if(Check == -1)
		{
			Check = LengthA - 1;
		}
		
		QuoteLabel.text = Quote[Check];
		Check = Check - 1;	
		
};



ButtonBack.addEventListener("click", BQuote);
ButtonForward.addEventListener("click", FQuote);
