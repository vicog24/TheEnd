
/* WELL DONE, MAKING IT HERE!! */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();


	if(loginForm.uname.value=="Expect_Us" ){
		if(loginForm.psw.value=="W3_@r3_n@m3l3$$")
		{
			location="page2.html";
		}
		else
		{
				alert("Correct ID but Invalid Password!!! :)");
		}
	}
			
	else{
			alert("Invalid User ID & Password !!! :)");

}
})

