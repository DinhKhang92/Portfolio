import React from "react"
import Chapter from "../components/Chapter/Chapter"

import "./Contact.css"

class Contact extends React.Component{
    render(){
        const space = '\xa0'
        return(
            // <h1>CONTACT</h1>
            <div className="content-container new-section">
                <Chapter chapter="Contact"/>
                <div className="padding-horizontal content-width">
                    <p className="section-title">Information</p>
                    <p style={{marginBottom: 12}} className="grey-text">Feel free to reach out to me any time!</p>
                    <p className="grey-text spacer">E-Mail: <span className="white-text">{space} Dinh.Khang92@hotmail.de</span></p>
                    <p className="grey-text spacer">Phone: <span className="white-text">{space} 0176 4385 9794</span></p>

                    <p className="section-title">Follow me on</p>
                    <div className="grid-container">
                        <a className="grid-item" href="https://www.xing.com/profile/Khang_Dinh2/cv" target="_blank">Xing</a>
                        <a className="grid-item" href="https://www.linkedin.com/in/khang-dinh-7790971a8/" target="_blank">LinkedIn</a>
                        <a className="grid-item" href="https://github.com/DinhKhang92" target="_blank">Github</a>
                        <a className="grid-item" href="https://www.instagram.com/dinh.khang92/" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact