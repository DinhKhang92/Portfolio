import React from "react"

import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="glass-bar"></div>
                <p className="chapter">Hi, I'm Khang Dinh</p>
                <div className="profile-picture"></div>
                <h1 className="profession">Software-Developer who loves challanges</h1>
                <p className="profession-description">With experience in machine learning, mobile-app development and web-development</p>
                <div className="download-cv-button">
                    <p className="cv-button-text">Download CV</p>
                </div>
            </div>
        )
    }
}

export default Home