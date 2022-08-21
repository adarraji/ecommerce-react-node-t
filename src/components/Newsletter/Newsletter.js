import React from "react";
import "./Newsletter.css";
import SendIcon from '@mui/icons-material/Send';


const Newsletter = () => {
    return (
        <div className="newsletter flex justify-center items-center flex-column">
            <h1 className="f1 mb3">Newsletter</h1>
            <div className="f3 fw5 mb3">Get timely updates from your favorite products.</div>
            <div className="input-container bg-white flex justify-between ba b--light-silver">
                <input className="pa2 br-none flex-8" placeholder="Your email" />
                <button className="br-none flex-1 bg-teal white flex justify-center items-center">
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter