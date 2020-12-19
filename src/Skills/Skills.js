import React from "react"
import Chapter from "../components/Chapter/Chapter"

import SkillCard from "./components/SkillCard/SkillCard"

import skillData from "./data/skillData";

class Skills extends React.Component{   
    render(){
        const skillCards = skillData.map(skillCard => <SkillCard 
            key={skillCard.id} 
            icon={skillCard.icon}
            title={skillCard.title}
            skills={skillCard.skills}
        />)
        
        return(
            <div className="content-container new-section">
                <Chapter chapter="Skills"/>
                {skillCards}
            </div>
        )
    }
}

export default Skills