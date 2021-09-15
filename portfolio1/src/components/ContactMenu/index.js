import React from 'react';
import RJRESUME from "../../assets/RJRESUME.pdf";
import "./style.css";

export default function ContactMenu(props) {
  return (
    <div className="container-lg">
    <div className="row">

      <div className="col">
        <h1 className="display-6 text-center label">Get in touch</h1>
      </div>

    </div>
    <div className="row about-text text-center">
      <p>Thank you for your interest! Please feel free to reach out with any questions. Hopefully I am the developer for you, but if not I am happy to point you in the right direction if I am able. Please include any pertinent information in your message, and I will respond as soon as possible. Also, you may contact me on <a className="text-is-brightness" href="https://www.linkedin.com/in/reid-johnson-5485991bb/" rel="noreferrer" target="_blank">LinkedIn</a> or <a className="text-is-brightness" href="https://github.com/Rjsa210" rel="noreferrer" target="_blank">Github</a> or view my current <a className="text-is-brightness" href={RJRESUME} target="_blank" rel="noreferrer">Resume.</a></p>
    </div>

    <div className="row justify-content-center">

      <div className="col-2">

      </div>

      <div className="col-12 col-sm-4 text-center">
        <button className="btn btn-outline-info btn-lg" onClick={props.sendAppMessage}>
          I need a Website or App...
        </button>
      </div>

      <div className="col-12 col-sm-4 text-center">
        <button className="btn btn-outline-info btn-lg" onClick={props.sendHireMessage}>
          I am looking to hire...
        </button>
      </div>
      <div className="col-2">

      </div>
    </div>
  </div>
  )
}
