


var Quote = ["zero", "one" , "two", "three", "four", "five"];
var LengthA = Quote.length;
var Check = 0;
var BTrigger = false;
var FTrigger = false;

var FQuote = function () 
{
		BTrigger = true; //checks if other button 
		
		if(FTrigger == true)
		{
			Check = Check + 2;
			FTrigger = false;
		}
		
		

		if(Check == LengthA)
		{		
			Check = 0;		
		}
		
		QuoteLabel.text = Quote[Check];
		Check = Check + 1;	
		
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
