import React, { useState } from "react";
import axios from "axios";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PdfViewer.css'
// import ConvertAPI from 'convertapi';

export default function PdfViewer() {
    const [file, setFile] = useState(null);
    const [text, setText] = useState(null);
    const [view, setView] = useState(null);
    const [response, setResponse] = useState("");
    const newPlugin = defaultLayoutPlugin();
    const HTTP = "http://localhost:8000/chat";
    // const convertapi = new ConvertAPI(process.env.CONVERT_SECRET, {
    //     keepAlive: true
    // });

    const fileType = ['application/pdf'];
    const handleChange = (e) => {
        let file = e.target.files[0];
        if(file) {
            if(file && fileType.includes(file.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    setFile(e.target.result);
                }
            }
            else {
                console.log("Error1")
                setFile(null);
            }
        }
        else {
            console.log("Please select a PDF")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(file !== null) {
            setView(file);
        }
        else {
            console.log("Error2")
            setView(null);
        }
    }

    // TODO: Implement PDF to text conversion
    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     if(file !== null) {
    //         axios.post(`${HTTP}`, { text })
    //             .then((res) => setResponse(res.data))
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    //     else {
    //         console.log("Error3")
    //         setResponse("");
    //     }        
    // }

    return (
        <div className="ps-3">
            <form>
                <input type="file" accept=".pdf" className="form-control" onChange={handleChange} style={{width: "50%", justifyContent: "left"}}/>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Upload PDF</button>
                {/* <button type="submit" className="btn btn-info" onClick={handleUpload}>Submit PDF to Engine</button> */}
            </form>
            <br/>
            <h3>View PDF</h3>
            <div className="pdf-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    {view && <>
                        <Viewer fileUrl={view} plugins={[newPlugin]} />
                    </>}
                    {!view && <>No PDF Selected</>}
                </Worker>
            </div>
        </div>
    );
}