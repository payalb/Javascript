function validate(){
	
	var email= document.getElementById("exampleInputEmail1");
	var password= document.getElementById("exampleInputPassword1")
    	if(typeof(email) != "undefined" && !email.value.includes("@")){
    		document.getElementById("errors").innerHTML= "Invalid email";
    		document.getElementById("errors").style.color= "red"
    		return false;
    	}
    	else if (typeof(password) != "undefined" && password.value.length < 6){
    		document.getElementById("errors").innerHTML = "Invalid password";
    		document.getElementById("errors").style.color= "red"
    		return false;
    	}else{
    		return true;
    }
}