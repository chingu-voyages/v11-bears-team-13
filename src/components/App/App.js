import React from "react";
import { Jumbotron } from "reactstrap";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Jumbotron>
          <header className="App-header"></header>
        </Jumbotron>
      </div>
      <Footer />
    </>
  );
}

export default App;
