import React from 'react'
import ReactPlayer from "react-player"
import '../CSS/Youtube.css';

function YouTube() {
    return (
        <ReactPlayer
        width={'550px'}
        height={'300px'}
        url="https://www.youtube.com/watch?v=DWcJFNfaw9c"/>
    )
}

export default YouTube
