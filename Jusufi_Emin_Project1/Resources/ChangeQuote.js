


var Quote = ["zero", "one" , "two", "three", "four", "five"];
var LengthA = Quote.length + 1;
var Check = 0;
var BTrigger = false;
var FTrigger = false;

var FQuote = function () 
{
		BTrigger = true;
		
		if(FTrigger == true)
		{
			Check = Check + 2;
			FTrigger = false;
		}
		
		QuoteLabel.text = Quote[Check];
		Check = Check + 1;	
		

		if(Check == LengthA )
		{		
			Check = 0;		
		}
		
		
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
			Check = LengthA - 2;
		}
		
		QuoteLabel.text = Quote[Check];
		Check = Check - 1;	
		
			
		
		
		
};



ButtonBack.addEventListener("click", BQuote);
ButtonForward.addEventListener("click", FQuote);
