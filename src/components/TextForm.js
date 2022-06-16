import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","Converted to Uppercase");
    };
    const handleLoClick = () => {
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Converted to Lowercase");
    };
    const handleClearText = () => {
        // console.log("clicked");
        let newText = "";
        setText(newText);
        props.showAlert("success","Text Cleared");
    };
    const handleReplaceText = () => {
        // console.log("clicked");
        let for_word = document.getElementById("for_word").value;
        let replace_word = document.getElementById("replace_word").value;
        let newText = text.replace(for_word,replace_word);
        setText(newText);
        props.showAlert("success","Text Replaced");
    };
    
    const handleOnChange = (event) => {
        // console.log("typed"+text);
        setText(event.target.value);
    };

    const handleXtraSpace = () => {
        // console.log("typed"+text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ").trim());
        props.showAlert("success","Extra space removed");
        // setText(text.trim());
    };

    return (
        <>
        <div className='container my-3' style={{color:props.mode==="dark" ? "white":"black"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === "dark" ? "rgb(80 80 177)":"white",
                    color:props.mode === "dark" ? "white" : "black" }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary my-2 me-2" onClick={handleUpClick}>To UpperCase</button>
            <button className="btn btn-primary my-2 me-2" onClick={handleLoClick}>To LowerCase</button>
            <button className="btn btn-primary my-2 me-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary my-2 me-2" onClick={handleXtraSpace}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Replace Text</button>
            {/* modal replace */}
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Replace Words</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Replace For: </label>
                                        <input type="text" className="form-control" id="for_word" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Replace With: </label>
                                        <input type="text" className="form-control" id="replace_word" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleReplaceText} className="btn btn-primary" data-bs-dismiss="modal">Replace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode ==="dark" ? "white" : "black"}}>
            <h3>Your words Summary</h3>
            <p>{text.length > 0 ? text.split(" ").length: 0} words and {text.length} characters</p>
            <p>It will take {0.008 * text.length}mins to read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Enter text in textbox to preview"}</p>
        </div>
        </>
    )
}
