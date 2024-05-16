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
//register button
function register()
{
    let name = localStorage.setItem("name", document.getElementById("name").value);
    let username = localStorage.setItem("username", document.getElementById("username").value);
    let password = localStorage.setItem("password", document.getElementById("password").value);
    console.log(username);

    //window.location.href="register.html";

}
//login button
function login()
{
    let email = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let actual_email = localStorage.getItem("username");
    let actual_pass = localStorage.getItem("password");
    window.location.href="../index.html";
    if(actual_email == email && actual_pass == pass)
    {
        alert("Success!");
        window.location.href="https://www.google.com";
        
    }
    else{ alert("Invalid Username or Password")}
}

