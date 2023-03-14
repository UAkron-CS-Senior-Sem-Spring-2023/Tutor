import React , {useState, useEffect} from "react";

export default function Chat({socket, name, roomID}) {
    //current message
    const [message, setMessage] = useState("");
    
   const sendMessage = async () =>{
        //We want to send the name, roomID, message and timestamp
        if(message !== ""){
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();
            const data ={
                roomID: roomID,
                name: name,
                message:message,
                timestamp: `${hour}:${minute}:${second}`,
            };
            await socket.emit("sendMessage", data);
        }
    };
    useEffect(() => {
        socket.on("receiveMsg", (data) =>{
            console.log(data);
        });
    }, [socket]);

    //TODO, EXPORT THIS
    return (<div><div className="top"> <h3> Live Chat </h3></div>
             <div className="message"> 
              <input type="text" placeholder="Hello!" onChange={(event)=>setMessage(event.target.value)}></input>
              <button onClick={sendMessage}>Send</button>
              </div>
            <div className="bottom"> </div>
            </div>);
}