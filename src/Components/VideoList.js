import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onSelectedVideo}) =>{
   const RenderedList= videos.map((video) =>{
        return <VideoItem 
        key = {video.id.videoId} 
        onSelectedVideo = {onSelectedVideo} 
        vdo = {video}
        />
    });
    return(
        <div className = "ui relaxed divided list">{RenderedList}</div>
    )
};

export default VideoList;