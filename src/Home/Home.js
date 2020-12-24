import React from "react"

import HomeCard from './components/HomeCard/HomeCard'
import Chapter from '../components/Chapter/Chapter'
import './Home.css'

import CV from './assets/Lebenslauf.pdf'

class Home extends React.Component{
    render(){
        return(
            <div className="content-container spacer-navbar landing-page-container">
                <Chapter chapter="Hi, I'm Khang Dinh"/>
                <div className="home-flex-container">
                    <div className="profile-picture"></div>
                    <div className="home-grid-center-content">
                        <h1 className="profession">Software-Developer who loves challenges</h1>
                        <p className="profession-description">With experience in machine learning, mobile-app development and web-development</p>
                        <a className="download-cv" href={CV} download="CV_Khang_Dinh.pdf">Download CV</a>
                    </div>
                </div>
                <div className="home-grid-container">
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
            </div>
        )
    }
}

export default Home