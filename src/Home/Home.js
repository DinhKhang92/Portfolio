import React from "react"

import HomeCard from './components/HomeCard/HomeCard'
import Chapter from '../components/Chapter/Chapter'
import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="content-container">
                <Chapter chapter="Hi, I'm Khang Dinh"/>
                <div className="profile-picture"></div>
                <h1 className="profession">Software-Developer who loves challenges</h1>
                <p className="profession-description">With experience in machine learning, mobile-app development and web-development</p>
                <div className="download-cv-button">
                    <p className="cv-button-text">Download CV</p>
                </div>
                <HomeCard
                    icon="school"
                    title="Autodidact"
                    description="Working on various software projects in my off-time"
                />
                <HomeCard
                    icon="groups"
                    title="Teamplayer"
                    description="Listening and being part of a team is where I'm at"
                />
                <HomeCard
                    icon="thumb_up"
                    title="Quality"
                    description="Making sure that the high quality standards are always met"
                />
            </div>
        )
    }
}

export default Home