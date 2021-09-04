import React from "react";
import Nav from "./components/navbar";
import Video from "./components/video/video";
import Aboutme from "./components/aboutme/aboutme";
import Showcase from "./components/showcase/showcase";
import Projects from "./components/projects/projects";
import Contactme from "./components/contactme/contactme";
import Footer from "./components/footer/footer";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Video />
        <Nav />
        <Showcase />
        <Aboutme />
        <Projects />
        <Contactme />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
