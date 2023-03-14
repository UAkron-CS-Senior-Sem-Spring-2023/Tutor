import React , {useState, useEffect} from "react";

export default function Chat({socket, name, roomID}) {
    //current message
    const [message, setMessage] = useState("");
    //save all messages
    const [allMessages, setAllMessage] = useState([]);
    
   const sendMessage = async () =>{
        //We want to send the name, roomID, message
        if(message !== ""){
            const data ={
                roomID: roomID,
                name: name,
                message:message,
            };
            await socket.emit("sendMessage", data);
        }
    };
    useEffect(() => {
        socket.on("receiveMsg", (data) =>{
            setAllMessage(list => [...list, data]);
        });
    }, [socket]);

    //TODO, EXPORT THIS
    return (<div><div className="top"> <h3> Live Chat </h3></div>
             <div className="message"> 
              {allMessages.map(eachMessage => (<h2>{eachMessage.message}</h2>))}
              </div>
            <div className="bottom">
            <input type="text" placeholder="Hello!" onChange={(event)=>setMessage(event.target.value)} onKeyDown ={(event)=>event.key === 'Enter' && sendMessage()}></input>
              <button onClick={sendMessage}>Send</button> </div>
            </div>);
}