import React from "react";
import "./style.css"
import Headshot from "../../images/headshot.jpg";

function BioText() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-6 text-center label">
            About
          </h1>
          <figure>
            <img className="bioImage" src={Headshot} alt="Me in Mammoth lakes" />
          </figure>

          <p className="about-text">I am a former chef and current freelance web developer residing in the Sierra Nevada's in California. I am passionate about building performance driven applications and websites, with a focus on the not only the end user experience, but the client experience as well. </p>
          <p className="about-text">I believe the future of any small business lies on the web to some extent or another, and personalized websites and applications are necessary for the continued growth and success of many businesses. </p>
          <p className="about-text">I build websites and applications with the business owner in mind. How will you be using this application to build your business, and how can I make that process as simple and hassle free as possible.</p>

        </div>
        {/* services list */}
        <div className="col-md-6">
          <h1 className="display-6 text-center label">
            Services
          </h1>
          <p className="about-text"><em className="service">Front-end Development</em> I have experience with numerous frameworks, so if you have an app that needs some simple touching up, or you are looking for a new user/client experience built from the ground up... rest assured I can handle the task. I believe simple is best, and I create clean, reactive user-friendly layouts.</p>

          <p className="about-text"><em className="service">Back-end Development</em> Need something a little more complex? I can build custom databases and API's to suit the need of your business. </p>

          <p className="about-text"><em className="service">Personalized Solutions</em> Your web application should be tailored to your specific needs. This is something that cannot be acheived with cookie cutter tech. I build applications that are engineered to make the experience of both the user and business-owner more enjoyable and intuitive.</p>
          <br />
        </div>

      </div>

    </div>
  )
}

export default BioText;