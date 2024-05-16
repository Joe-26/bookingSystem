//register button
function register()
{
    let name = localStorage.setItem("name", document.getElementById("name").value);
    let username = localStorage.setItem("username", document.getElementById("username").value);
    let password = localStorage.setItem("password", document.getElementById("password").value);   //NOT RECOMMENDED TO STORE PASSWORD ON CLIENT SIDE SRTICTLY!
    
}
//registration username check
function validate_username()
{
	var username = document.getElementById("username").value;
	document.getElementById("username_error").innerHTML="";
	if(username === null || username.length==0)
	{
		document.getElementById("username_error").innerHTML="Username is mandate!";
        document.getElementById("register_submit").setAttribute("disabled", "disabled");
	}
    else
    {
        document.getElementById("register_submit").removeAttribute("disabled");
    }
}
//registration password
function validate_pass()
{
    var password = document.getElementById("password").value;
	document.getElementById("password_error").innerHTML="";
	if(password === null || password.length==0)
	{
		document.getElementById("password_error").innerHTML="Password missing!";
        document.getElementById("register_submit").setAttribute("disabled", "disabled");
	}
    else
    {
        document.getElementById("register_submit").removeAttribute("disabled");
    }
}

