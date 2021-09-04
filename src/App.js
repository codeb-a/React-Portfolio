import React from "react";
import Nav from "./components/navbar";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Projects from "./components/projects";
import Contactme from "./components/contactme";
import Footer from "./components/footer";
// import Projects from "./components/projects";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import skyvid from "./components/images/skyvid.mp4";

function App() {
  return (
    <div>
      <video id="videobg" autoPlay loop muted>
        <source src={skyvid} type="video/mp4" />
      </video>
      <Nav />
      <Header />
      <Aboutme />
      <Projects />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
