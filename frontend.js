//Popup Contact From

//validating all fields
function input_fields() {
 	if (document.getElementById('name').value==""|| document.getElementById('email').value=="" ||document.getElementById('msg').value=="") {
 		alert("Complete all fields");
 	}
 	else{
 		document.getElementById('form').submit();
 		aleret("Message Sent  Successfully.....");
 	}
}

//display contact form
function show_form(){
	document.getElementById('MessageBox').style.display ="block";

}

//close contact form
function close_form(){
	document.getElementById('MessageBox').style.display ="none";
}