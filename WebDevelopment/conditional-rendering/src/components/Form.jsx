import React from "react";
import Input from "./input";

function Form(props){
    return(
        <form className="form"   autoComplete="off">
            <h1>Hello</h1>
            <Input
            type = "text"
            placeholder= "Username"
            />
            <Input
            type = "password"
            placeholder= "Password"
            />
             {!props.isRegistered && ( <Input type = "password" placeholder= "Confirm Password"/>)}
           
            <button type="submit">
                { props.isRegistered ? "Login": "Register"  }
            </button> 
            </form>
    )
}

export default Form