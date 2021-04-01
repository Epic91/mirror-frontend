import React from 'react'
import ReactPlayer from "react-player"

function YouTube() {
    return (
        <ReactPlayer
        className='yt'
        width={'500px'}
        height={'300px'}
        url="https://www.youtube.com/watch?v=DWcJFNfaw9c"/>
    )
}

export default YouTube
