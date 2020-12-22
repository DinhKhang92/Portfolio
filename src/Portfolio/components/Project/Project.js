import React from "react"
import "./Project.css"

class Project extends React.Component{
    render(){
        return(
            <div className="project-container">
                <img className="project-img" alt={this.props.img} src={this.props.img}></img>
                <p className="project-type">{this.props.type}</p>
                <h3 className="project-title">{this.props.title}</h3>
                <p className="project-description">{this.props.description}</p>
            </div>
        )
    }
}

export default Project