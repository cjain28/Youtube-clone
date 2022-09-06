import "./VideoItem.css";
import React from "react";

const VideoItem = ({vdo, onSelectedVideo}) => {
return(
    <div onClick={() => onSelectedVideo(vdo)} className="video-item item">
        <img 
        className = "ui image" 
        src = {vdo.snippet.thumbnails.medium.url} 
        alt = {vdo.snippet.title} />
        <div className="content">
            <div className = "header">
            {vdo.snippet.title}
            </div>
        </div>
        
    </div>
);
};

export default VideoItem;