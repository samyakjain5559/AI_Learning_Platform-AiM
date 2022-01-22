import React from "react";
import { useState } from "react";
import axios from "axios";
import { StatusContainer, StatusText} from "../accountBox/common";

export function Speech() {
    const [analyzeStatus, setAnalyzeStatus] = useState("");
    const [name, setName] = useState();
    const [file, setFile] = useState();

    // On file select (from the pop up)
    function onFileChange(e) {
        // Update the state
        setName(e.target);
        setFile(e.target.files[0]);
        // Refresh analyze status
        setAnalyzeStatus();
    }

    // On file upload (click the upload button)
    function onFileUpload(e) {
        e.preventDefault();

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("name", name);
        formData.append("file", file);

        // Send formData object
        axios.post('http://localhost:4000/speech_to_text', formData, {
            //'http://httpbin.org/anything' -- used to troubleshoot form passing
            formData: formData
        }).then((response) => {
            console.log(response);

            if (response.data.message) {
                setAnalyzeStatus(response.data.message);
            }
        }).catch(err => console.log());
    }

    return (
        <div>
            <h3>
                File Upload Sample
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            <StatusContainer>
                <StatusText>{analyzeStatus}</StatusText>
            </StatusContainer>
        </div>
    );
}