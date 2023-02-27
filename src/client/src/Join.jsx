import React from "react";
import Input from "./Input.jsx";

function Join(){
    return <form className="form">
                <Input type="text" placeholder ="Your Name" />
                <Input type ="text" placeholder="Room Id" />
                <button type="submit"> Join</button>
            </form>
}

export default Join;