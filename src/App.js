import React from "react";
import "./App.css";
import skyvid from "./components/video/skyvid.mp4";
import Nav from "./components/navbar/navbar";
import { Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* video background---------------------------------------------------------------- */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={skyvid} type="video/mp4" />
      </video>
      {/* navbar---------------------------------------------------------------------------- */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Brandon
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="#" class=" text-light p-4 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-cnter justify-content-between p-4 m-5">
            <div class="p-5 m-5">
              <h1>
                FULL STACK <span class="text-info">WEB DEVELOPER</span>
              </h1>
              <p class="lead my-4">
                “The biggest obstacle I ever faced was my own limited perception
                of myself.” – RuPaul
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
