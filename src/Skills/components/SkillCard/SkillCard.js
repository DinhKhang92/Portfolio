import React from "react"

import "./SkillCard.css"

class SkillCard extends React.Component{
    render(){
        const skills = this.props.skills.map(skill => <li key={skill} className="skill">{skill}</li>)
        return(
            <div>
                <div className="glass-card skill-card-container flex-container">
                    <span className="material-icons icon">
                        {this.props.icon}
                    </span> 
                    <h4 className="skill-card-title">{this.props.title}</h4>
                    <ul className="skill-container">
                        {skills}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SkillCard