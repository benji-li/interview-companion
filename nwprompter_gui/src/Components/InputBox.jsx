import React, { useState } from "react";
import axios from "axios";

export default function InputBox() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const HTTP = "http://localhost:8000/chat";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${HTTP}`, { prompt })
            .then((res) => setResponse(res.data))
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePrompt = (e) => setPrompt(e.target.value);

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    className="input" 
                    placeholder="Input text..."
                    value={prompt}
                    onChange={handlePrompt}
                />
                <input type="submit" value="Submit" />
            </form>
            <div>{response ? response : ""}</div>
        </div>
    
    );
}