import {useState} from "react";


export default function Contact(){

    const [name, setName ] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(
        <div>
            <section> 
               <h2>Contact</h2> 
               <label>
                Name
               </label>
               <input type="text" value={name}></input>

               <label>
                Email
               </label>
               <input type="text" value={email}></input>

               <label>
                Message
               </label>
               <input type = "text" value={message}></input>
               <input type="submit"></input>
            </section>
        </div>
    )
}