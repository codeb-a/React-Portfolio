import React from "react";
import "./App.css";
import skyvid from "./components/video/skyvid.mp4";
import squadgoalspic3 from "./components/images/squadgoalspic3.png";
import beatwave from "./components/images/beatwave.png";
import Ecommercepic from "./components/images/E-Commercepic.jpeg";
import employeetrackerpic from "./components/images/employeetrackerpic.png";
import passwordgeneratorpic from "./components/images/passwordgeneratorpic.png";
import techblogpic from "./components/images/techblogpic.png";
import Weatherdashboardpic from "./components/images/Weatherdashboardpic.png";
import notetakerpic3 from "./components/images/notetakerpic3.png";
import selfpic from "./components/images/IMG_3010.JPG";

function App() {
  return (
    <div className="App">
      {/* video background---------------------------------------------------------------- */}
      <video id="videobg" autoPlay loop muted>
        <source src={skyvid} type="video/mp4" />
      </video>
      {/* navbar---------------------------------------------------------------------------- */}
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top">
        <div class="container">
          <link to="#" class="navbar-brand text-light">
            BRANDON AKERS
          </link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <link to="#aboutme" class="nav-link text-light">
                  ABOUT ME
                </link>
              </li>
              <li class="nav-item">
                <link to="#mywork" class="nav-link text-light">
                  MY WORK
                </link>
              </li>
              <li class="nav-item">
                <a href="#contactme" class="nav-link text-light">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Showcase section------------------------------------------------------------------------ */}
      <section id="#" class=" text-light p-4 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between p-4 m-5">
            <div class="p-5 m-5">
              <h1 class="centering">
                FULL STACK <span class="text-info">WEB DEVELOPER</span>
              </h1>
              <p class=" centering lead my-4">
                “The biggest obstacle I ever faced was my own limited perception
                of myself.” – RuPaul
              </p>
              <div>
                <img
                  class="self-pic img-fluid w-25 d-none d-sm-block"
                  src={selfpic}
                  alt={"selfpic"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me section------------------------------------------------------------------------------- */}
      <section id="aboutme" class="p-4">
        <h1 class="glow text-center p-5">ABOUT ME</h1>
        <p class="h4 text-light text-center">
          I'm a Full Stack Web Developer with an interest in Frontend. I
          recently graduated from the Northwestern University full stack web
          development program. Curious, determined, and creative always pushing
          myself to new ambitious heights. When I'm not coding my other passions
          include reading, video games, and Movies.
        </p>
      </section>
      {/* Projects section------------------------------------------------------------------------------- */}
      <section id="mywork" class="p-5">
        <h1 class="glow text-center p-5">PROJECTS</h1>
        <div class="row">
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">Squad Goals</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={squadgoalspic3}
                  alt={"squadgoalspic3"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Squad Goals</h1>
                <p>
                  Squad Goals is a trading card style, turn-based, battle
                  simulator that allows users to select a hero and then enjoy a
                  turn based battle to test their might!
                </p>
                <link
                  to="http://herobattle.herokuapp.com/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">beatwave</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={beatwave}
                  alt={"beatwave"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>beatwave</h1>
                <p>
                  beatwave is a unique application that allows a user to
                  generate a Spotify playlist based on the current weather in
                  any city around the world.
                </p>
                <link
                  to="https://group-proj-1.github.io/beatwave/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">E-Commerce</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Ecommercepic}
                  alt={"Ecommercepic"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>E-commerce</h1>
                <p>
                  This app allows the user to view, update, and remove
                  categories, products and tags from a database.
                </p>
                <link
                  to="https://github.com/codeb-a/E-Commerce-Backend"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">Tech Blog</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={techblogpic}
                  alt={"techblogpic"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Tech Blog</h1>
                <p>
                  This application is a tech blog where developers can publish
                  their blog posts and comment on other developers’ posts as
                  well.
                </p>
                <link
                  to="https://brandon-tech-blog.herokuapp.com/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">Employee Tracker</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={employeetrackerpic}
                  alt={"employeetrackerpic"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Employee Tracker</h1>
                <p>
                  This is a command-line application that lets a business owner
                  easily view and manage their employee database.
                </p>
                <link
                  to="https://github.com/codeb-a/Employee-Tracker"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">Note Taker</p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={notetakerpic3}
                  alt={"notetakerpic3"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Note Taker</h1>
                <p>
                  Note Taker is a simple application that lets the User easily
                  take notes for their daily use.
                </p>
                <link
                  to="https://ba-note-taker.herokuapp.com/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">
              Weather Dashboard
            </p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Weatherdashboardpic}
                  alt={"weatherdashboardpic"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Weather Dashboard</h1>
                <p>
                  This app allows the user to search for the current weather of
                  any city in the world along with a 5-day forecast.
                </p>
                <link
                  to="https://codeb-a.github.io/Weather-Dashboard/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
          <div class="flip-card m-3 g-4">
            <p class="text-light text-center glow-small h6">
              Password Generator
            </p>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={passwordgeneratorpic}
                  alt={"passwordgeneratorpic"}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </div>
              <div class="flip-card-back bg-dark text-light">
                <h1>Password Generator</h1>
                <p>
                  This application generates random passwords based on certain
                  parameters selected by the user.
                </p>
                <link
                  to="https://codeb-a.github.io/Password-Generator/"
                  target="_blank"
                  class="btn btn-info"
                >
                  View My Project
                </link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact me section----------------------------------------------------------------------------- */}
      <section id="contactme" class="text-light p-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h1 class="text-center p-5 glow">CONTACT INFO</h1>
              <p class="text-center lead">
                <i class="bi bi-envelope p-2"></i>brandonakers729@gmail.com
              </p>
              <div class="text-center h1">
                <link to="https://github.com/codeb-a" target="_blank">
                  <i class="bi bi-github"></i>
                </link>
                <link to="https://www.linkedin.com/in/b-akers/" target="_blank">
                  <i class="bi bi-linkedin"></i>
                </link>
                <link to="https://www.instagram.com/b_boss729/" target="_blank">
                  <i class="bi bi-instagram"></i>
                </link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer----------------------------------------------------------------------------- */}
      <footer class="p-5 text-light text-center position-relative">
        <div class="container">
          <p class="lead">Copyright &copy; 2021 Brandon Akers</p>
          <link to="#" class="position-absolute bottom-0 end-0 p5">
            <i class="bi bi-arrow-up-circle h1 p-5"></i>
          </link>
        </div>
      </footer>
    </div>
  );
}

export default App;
