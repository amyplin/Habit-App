Parse.initialize("Ih70t530LwJAnRJungwuPtE2nE3eakzmwVuZHb6O","sE6Y6iMcoTTa9Z3pBCaAtwnD9F1L9SlWHBKlDQ7h");rg4js("apiKey","5HU2mFdkS/e5Tur8l31gcA==");rg4js("attach",true);rg4js("enablePulse",true);rg4js("setUser",{identifier:"users_email_address_or_unique_id@domain.com",isAnonymous:false,email:"users_email_address@domain.com",firstName:"Firstname",fullName:"Firstname Lastname"});function onClickSignUp(){var a=document.getElementById("signInMessage");a.style.display="block"}function signIn(){var b=document.getElementById("usermail").value;var a=document.getElementById("password").value;document.getElementById("usermail").className="textInput";document.getElementById("password").className="textInput";document.getElementById("invalidLoginError").style.display="none";Parse.User.logIn(b,a,{success:function(c){location="welcome.html"},error:function(c,d){document.getElementById("usermail").className=document.getElementById("usermail").className+" inputError";document.getElementById("password").className=document.getElementById("password").className+" inputError";document.getElementById("invalidLoginError").style.display="block"}})};