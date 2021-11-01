import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/cover-video.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Guido Abelleira</h1>
            <p>Developer Full Stack Web</p>
        </div>
    )
}

export default Cover;

