import React from "react"

import "./Footer.css"

class Footer extends React.Component{
    render(){
        return(
            <div className="content-container new-section footer">
                <p className="grey-text">
                    © 2020 — 2021 Khang Dinh. Made with <span className="material-icons heart-icon"> favorite </span> in Berlin, Germany.
                </p>
            </div>
        )
    }
}

export default Footer