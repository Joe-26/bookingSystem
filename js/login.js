//login username check
function login_validate_username()
{
	var username = document.getElementById("username").value;
	document.getElementById("username_error").innerHTML="";
	if(username === null || username.length==0)
	{
		document.getElementById("username_error").innerHTML="Username is mandate!";
        document.getElementById("login_submit").setAttribute("disabled", "disabled");
	}
    else
    {
        document.getElementById("login_submit").removeAttribute("disabled");
    }
}
//login password check
function login_validate_pass()
{
    var password = document.getElementById("password").value;
	document.getElementById("password_error").innerHTML="";
	if(password === null || password.length==0)
	{
		document.getElementById("password_error").innerHTML="Password missing!";
        document.getElementById("login_submit").setAttribute("disabled", "disabled");
	}
    else
    {
        document.getElementById("login_submit").removeAttribute("disabled");
    }
}
//login button
function login()
{
    let email = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let actual_email = localStorage.getItem("username");
    let actual_pass = localStorage.getItem("password");

    if(actual_email == email && actual_pass == pass)
    {
        alert("Success!");
        sessionStorage.setItem("username",email);
        sessionStorage.setItem("code","secret");
        window.location.replace("../home.html");
        
    }
    else{ alert("Invalid Username or Password");window.location.replace("login.html");}
}
function signup()
{
    window.location.assign("../user/registration.html");
}
