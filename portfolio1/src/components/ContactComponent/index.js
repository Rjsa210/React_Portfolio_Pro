import React, { useEffect, useState } from "react";
import ContactMenu from "../ContactMenu";
import AppForm from "../AppForm";
import HireForm from "../HireForm";



import "./style.css";

function ContactComponent() {
  const [message, setMessage] = useState();

  useEffect(() => (
    setMessage(false)
  ), [])

  function cancelMessage() {
    setMessage(false)
  }
  function sendAppMessage() {
    setMessage("application")
  }

  function sendHireMessage() {
    setMessage("hire")
  }

  function renderContact(state) {
    switch (state) {
      case false:
        return (
          <ContactMenu cancelMessage={cancelMessage} sendAppMessage={sendAppMessage} sendHireMessage={sendHireMessage} />
        )
      case "application":
        return (
          <AppForm cancelMessage={cancelMessage} />
        )
      case "hire":
        return (
          <HireForm cancelMessage={cancelMessage} />
        )
      default:
        return(
          <ContactMenu cancelMessage={cancelMessage} sendAppMessage={sendAppMessage} sendHireMessage={sendHireMessage} />
        )
    }
  }

  return (
    <div>
      {renderContact(message)}


    </div>
  )
}
export default ContactComponent;