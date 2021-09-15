import React, { useRef } from 'react'
import emailjs, { init } from "emailjs-com";
init("user_7gIe3Z4DyTbokSxRSqTPa");


export default function AppForm(props) {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ajmmafg', 'template_pp2sa9f', e.target, 'user_7gIe3Z4DyTbokSxRSqTPa')
      .then((result) => {
        console.log(result.text);
        clearForm();
        alert("Thank you, your message has been sent!");
      }, (error) => {
        console.log(error.text);
        alert(`Unable to send: ${error.text}`);
      });
  }

  function clearForm() {
    nameRef.current.value = null
    emailRef.current.value = null
    messageRef.current.value = null
  }


  return (
    <div className="container-lg">
      <div className="row">

        <div className="col">
          <h1 className="display-6 text-center label">In need of an Application or Website...</h1>
        </div>

      </div>
      

      <form className="container-lg contact-form" onSubmit={sendEmail}>
        <div className="mb-3">
          <label for="name-input" className="form-label">Name</label>
          <input ref={nameRef} type="text" name="user_name" className="form-control" id="name-input" placeholder="John Smith" />
        </div>
        <div className="mb-3">
          <label for="email-input" className="form-label">Email</label>
          <input ref={emailRef} type="email" name="user_email" className="form-control" id="email-input" placeholder="JohnSmith@example.com" />
        </div>
        <div className="mb-3">
          <label for="form-text" className="form-label">Message</label>
          <textarea ref={messageRef} class="form-control" id="form-text" rows="3" name="message" placeholder="Message..." />
        </div>

        <div className="row justify-content-center">
          <div className="col-2">
          </div>
          <div className="col-12 col-sm-4 text-center">
            <button className="btn btn-outline-light btn-lg" onClick={props.cancelMessage}>
              Cancel Message
            </button>
          </div>

          <div className="col-12 col-sm-4 text-center">
            
              <button className="btn btn-outline-info btn-lg" type="submit" value="Send">
                Send Message
              </button>
            
          </div>
          <div className="col-2">

          </div>
        </div>

      </form>

    </div>
  )
}
