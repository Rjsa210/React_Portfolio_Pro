import React from "react";
import "./style.css";


function ProjectItem(props) {
  return (
    <div className="container project-box">
      <div className="row">
        <div className="col">
          <figure>
            <img src={props.img} alt={props.name} className="project-thumbnail" />


          </figure>
        </div>
      </div>
      <p className="project-title">{props.name}</p>
      <p className="technologies">{props.tech}</p>
      
    

    </div>







  )
}
export default ProjectItem;