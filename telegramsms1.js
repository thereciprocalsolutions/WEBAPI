 /* 
copy past in using file
onclick="sent();"
<script src="https://thereciprocalsolutions.github.io/WEPAPI/telegramsms1.js"></script> 
*/ 
function sent() {
    var Name = document.getElementById("name").value;
    var Phone = document.getElementById("phone").value;
    var PickupLocation = document.getElementById("location-1").value;
    var DropLocation = document.getElementById("location-2").value;
    var PickupDate = document.getElementById("pickupdate").value;
    var PickupTime = document.getElementById("pickuptime").value;
    var Cars = document.getElementById("cars").value;
    var Service = document.getElementById("service").value;
    var CompanyName = document.getElementById("cname").value;
    var CompanyLink = document.getElementById("clink").value;
    var CompanyPhoneNumber = document.getElementById("cphone").value;
    var BotId = document.getElementById("bid").value;
    var ChatId = document.getElementById("cid").value;
    var TelegramLink = document.getElementById("tlink").value;
    var rate;
    if((Cars=="Sedan") && (Service=="One-Way"))
    {rate=sedano;}
    else if((Cars=="Sedan") && (Service="Round"))
    {rate=sedanr;}
    else if((Cars=="SUV") && (Service=="One-Way"))
    {rate=suvo;}
    else if((Cars=="SUV") && (Service=="Round"))
    {rate=suvr;}
    else if(Cars=="Traveller")
    {rate=traveller;}

    var result = 'Customer Name:  ' + Name + '%0APhone Number: ' + Phone +'%0APickup Location: ' + PickupLocation+  '%0ADrop Location: ' + DropLocation + '%0APickup Date: ' + PickupDate + '%0APickup Time: ' + PickupTime +'%0AService: ' + Service + '%0ACars: ' + Cars+"%0APrice:"+rate;

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(Name==""||Phone==""||PickupLocation==""||DropLocation=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot'+BotId+'/sendMessage?chat_id='+ChatId+'&text='+result;
        request.open("post", url);
        request.send();
         console.log("Sent Telegram successfully");
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+CompanyLink+"%0AContact No: "+CompanyPhoneNumber+"%0AHello "+Name+",%0AThank you for Booking with "+CompanyName+".Your "+PickupLocation+" Booking has been Confirmed on "+PickupDate+".&language=english&route=p&numbers="+Phone)
			.then(response=>{
			if(response.status==200)
			{
				console.log("Sent Message successfully");
		
			window.location.href = "bookingSuccess.html";	
      }
        }

});
} 
