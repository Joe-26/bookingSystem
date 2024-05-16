let value = sessionStorage.getItem("code");
if (value != "secret")
{
    window.location.replace("../html/user/login.html");
}

function logout()
{
    confirm("Are you sure you want to LOGOUT?");
    window.location.replace("index.html");
}
