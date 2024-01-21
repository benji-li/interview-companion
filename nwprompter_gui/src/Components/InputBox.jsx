import React, { useState } from "react";
import axios from "axios";

export default function InputBox() {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const HTTP = "http://localhost:8000/chat";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${HTTP}`, { text })
            .then((res) => setResponse(res.data))
            .catch((error) => {
                console.log(error);
            });
    };

    const handleText = (e) => setText(e.target.value);

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    className="input" 
                    placeholder="Input text..."
                    value={text}
                    onChange={handleText}
                />
                <input type="submit" value="Submit" />
            </form>
            <div>{response ? response.text : ""}</div>
        </div>
    
    );
}