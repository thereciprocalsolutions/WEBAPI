  var otpr;
  var otp;
  var phone;
function sent() {
  phone=document.getElementById("phone").value;
  otp = Math.floor((Math.random()*1000000)+1);
  if(phone!="")
  {
  alert("OTP Sent");
 var otps =window.open("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message= %0A..%0A Thanking For Registering%0AYour OTP : "+otp+"%0A For CAB Booking "+"&language=english&route=p&numbers="+p);
  }
  else
  {
    alert("Enter Phone Number");  
  }
 if(otp){
            setTimeout(function () { otp.close();}, 1000);
    }
   
 }
 function view() 
 
  {
  otpr=document.getElementById("otp").value;
  if(otpr!=""){
  if(otpr==otp )
	{
		alert("verify");
	}
  else
	{
		alert("not");
	}
  }
  else
  {
    alert("Enter OTP");  
  }
}
