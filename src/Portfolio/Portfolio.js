import React from "react"

import "./Portfolio.css"

import Chapter from "../components/Chapter/Chapter"
import Project from "./components/Project/Project"

class Portfolio extends React.Component{
    render(){
        return(
            <div className="content-container new-section">
                <Chapter chapter="Portfolio"/>
                <div className="portfolio-grid-container">
                    <Project 
                        img={process.env.PUBLIC_URL + '/sitkrit.png'} 
                        type="Machine Learning"
                        title="Determination of driver attention using ML-approaches"
                        description="This project presents the determination of the driver’s attention by machine learning for the estimation of the collision danger in the traffic on the basis of real data from endurance measurements."    
                    />
                    <Project 
                        img={process.env.PUBLIC_URL + '/image-sr.png'} 
                        type="Machine Learning"
                        title="Image super-resolution using deep neural networks"
                        description="This project presents methods for image super-resolution using artificial neural networks. The approaches are compared and evaluated with interpolation-based scaling algorithms such as nearest neighbor, bilinear interpolation and bicubic interpolation."    
                    />
                    <Project 
                        img={process.env.PUBLIC_URL + '/pogo.png'} 
                        type="Mobile-App Development"
                        title="Tradedex"
                        description="Tradedex is a tool for the AR game 'Pokémon Go' and is designed exclusively for trading and collecting purposes. The trading process is to be simplified due to the self-created lists, which can be shared among the contacts."    
                    />
                </div>
            </div>
        )
    }
}

export default Portfolio