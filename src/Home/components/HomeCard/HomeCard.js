import React from "react";

import './HomeCard.css'

function HomeCard(props){
    return(
        <div className="glass-card flex-container">
            <span className="material-icons icon">{props.icon}</span>
            <h4 className="glass-card-title">{props.title}</h4>
            <p className="glass-card-description">{props.description}</p>
        </div>
    )
}

export default HomeCard