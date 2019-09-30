import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Place from "../Place/Place";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Place" component={Place} />
          </Switch>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
