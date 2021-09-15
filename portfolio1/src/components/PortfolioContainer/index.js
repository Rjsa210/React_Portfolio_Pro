import React from "react";
import ProjectItem from "../ProjectItem";
import cookNtrl from "../../images/cooking-natural.jpg";
import podcast from "../../images/podcast-junkie.jpg"
import farmDirect from "../../images/farm-direct.jpg"
import "./style.css"

function PortfolioContainer() {
  return (
    <div className="container-lg project-box">
      <div className="row">

        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={cookNtrl} name={"Cooking Natural"} tech={"HTML, CSS, Javascript, NodeJS"}>
          </ProjectItem>
        </div>

        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={podcast} name={"Podcast Junkie"} tech={"HTML, CSS, Javascript, Express, Node, Handlebars.js"}>
          </ProjectItem>
        </div>

      </div>

      <div className="row">
        
        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={farmDirect} name={"Farm Direct"} tech={"Mongo DB, Node JS, Express, React"}>
          </ProjectItem>
        </div>

        {/* <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={cookNtrl}>
          </ProjectItem>
        </div> */}

      </div>
    </div>
  )
}

export default PortfolioContainer;