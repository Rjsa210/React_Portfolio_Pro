import React, { useEffect, useState } from "react";
import PattiSmith from "../Quotes/PattiSmith";
import HarukiMurakami from "../Quotes/HarukiMurakami";
import Willie from "../Quotes/Willie";
import Yeager from "../Quotes/Yeager";
import "./style.css";

function Quote() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const quoteNumber = () => {
      return Math.floor(Math.random() * 4)
    }

    setQuote(quoteNumber);
  }, [])

  /* Switch Case for quotes */
  function renderQuote(param) {
    switch (param) {
      case 1:
        return (
          <PattiSmith />
        )

      case 2:
        return (
          <Yeager />
        )

      case 3:
        return (
          <Willie />
        )

      default:
        return (
          <PattiSmith />
        )

    }
  }


  return (
    <div className="container-lg">
      <div className="row quote-row">
        <div className="col-md-2">
          {/* placeholder col */}
        </div>
        {renderQuote(quote)}
        {/* <PattiSmith /> */}
        {/* <HarukiMurakami /> */}
        {/* <Yeager /> */}
        {/* <Willie /> */}

      </div>
    </div>

  );
}
export default Quote;