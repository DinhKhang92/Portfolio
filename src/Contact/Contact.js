import React from "react"
import Chapter from "../components/Chapter/Chapter"

import "./Contact.css"

class Contact extends React.Component{
    render(){
        return(
            <div className="content-container new-section">
                <Chapter chapter="Contact"/>
                <div className="padding-horizontal">
                    <p className="section-title">Information</p>
                    <p style={{marginBottom: 12}} className="grey-text">Feel free to reach out to me any time!</p>
                    <p className="grey-text spacer">E-Mail: <span className="white-text">Dinh.Khang92@hotmail.de</span></p>
                    <p className="grey-text spacer">Phone: <span className="white-text">0176 4385 9794</span></p>

                    <p className="section-title">Follow me on</p>
                    <div className="grid-container">
                        <div className="grid-item">Xing</div>
                        <div className="grid-item">LinkedIn</div>
                        <div className="grid-item">Github</div>
                        <div className="grid-item">Instagram</div>
                    </div>
                    {/* <p style={{marginTop: 50, marginBottom: 20}} className="grey-text">
                    © 2020 — 2021 Khang Dinh. Made with <span className="material-icons heart-icon"> favorite </span> in Berlin, Germany.
                    </p> */}
                </div>
            </div>
        )
    }
}

export default Contact