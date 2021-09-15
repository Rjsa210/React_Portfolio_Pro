import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./index.css";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>

      <div className="background">

        <div className="background-filter">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>



        </div>
      </div>
      <Footer />

    </Router>

  );
}

export default App;
