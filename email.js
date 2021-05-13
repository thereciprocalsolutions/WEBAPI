function testVariable() {
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    
   
    var CompanyName = document.getElementById("cname").value;
    var CompanyLink = document.getElementById("clink").value;
    var CompanyPhoneNumber = document.getElementById("cphone").value;

    var result1 = '<br/>Your Name:   ' + Name +
	                '<br/>Email: ' + Email ;
       		

    var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if(Name==""||Email=="")
        {
        console.log('error');
	        alert("Fill all details");
        }else
        {
		 Email.send({
                Host:"smtp.gmail.com",
                Username:'thereciprocalolutions.projects@gmail.com',
                Password:'cgenxthsgpwplxoy',
                To: Email,
                From: 'thereciprocalolutions.projects@gmail.com',
                Subject: 'New Booking '+Name,
                Body:'The New Booking Details <br/>'+result1+"Get In Touch With Us!"+CompanyName+" "+CompanyLink+" "+CompanyPhoneNumber+" <br/>Copyright ©2021 The Reciprocal Solutions. All rights reserved',
                }).then((message)=>alert("Your Details Share With "+CompanyName+"!!\nWe Will Get Touch In 24 Hours!"));
        var wnd1=location.replace("bookingSuccess.html","_self ");		      
        }

});
} 
