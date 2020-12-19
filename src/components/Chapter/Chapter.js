import React from "react"

import './Chapter.css'

function Chapter(props){
    return(
        <div className="chapter-container">
            <div className="glass-bar"></div>
            <p className="chapter">{props.chapter}</p>
        </div>
    )
}

export default Chapter