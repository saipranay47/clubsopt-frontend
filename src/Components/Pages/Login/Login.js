import React from "react";
import "./Logins.css";
function Login(){
    return (
        <div className="col-mid-2">
        <h1 class="Name-2">Login</h1>
        <a src="#"><button class="button" type="button" name="button"><a href="/accounts/google/login/?process=login">Sign In</a> <i class="fab fa-google"></i></button></a>
        </div>
       
    )
}

export default Login;