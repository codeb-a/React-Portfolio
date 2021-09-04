import React from "react";
import beatwave from "./images/beatwave.png";
import ecommercepic from "./images/ecommercepic.png";
import squadgoalspic3 from "./images/squadgoalspic3.png";
import employee from "./images/employeetrackerpic.png";
import notetaker from "./images/notetakerpic3.png";
import passwordpic from "./images/passwordgeneratorpic.png";
import techblogpic from "./images/techblogpic.png";
import weatherdashboardpic from "./images/weatherdashboardpic.png";
const Projects = () => {
  return (
    <section id="mywork" className="p-5">
      <h1 className="glow text-center p-5">PROJECTS</h1>
      <div className="row">
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">Squad Goals</p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={squadgoalspic3}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Squad Goals</h1>
              <p>
                Squad Goals is a trading card style, turn-based, battle
                simulator that allows users to select a hero and then enjoy a
                turn based battle to test their might!
              </p>
              <a
                href="http://herobattle.herokuapp.com/"
                target="_blank rel=noreferrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">beatwave</p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={beatwave}
                alt=""
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>beatwave</h1>
              <p>
                beatwave is a unique application that allows a user to generate
                a Spotify playlist based on the current weather in any city
                around the world.
              </p>
              <a
                href="https://group-proj-1.github.io/beatwave/"
                target="_blank rel=noreferrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">E-Commerce</p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={ecommercepic}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>E-commerce</h1>
              <p>
                This app allows the user to view, update, and remove categories,
                products and tags from a database.
              </p>
              <a
                href="https://github.com/codeb-a/E-Commerce-Backend"
                target="_blank rel=noreferrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">Tech Blog</p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={techblogpic}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Tech Blog</h1>
              <p>
                This application is a tech blog where developers can publish
                their blog posts and comment on other developers’ posts as well.
              </p>
              <a
                href="https://brandon-tech-blog.herokuapp.com/"
                target="_blank rel=noreferrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">
            Employee Tracker
          </p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={employee}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Employee Tracker</h1>
              <p>
                This is a command-line application that lets a business owner
                easily view and manage their employee database.
              </p>
              <a
                href="https://github.com/codeb-a/Employee-Tracker"
                target="_blank rel=no referrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">Note Taker</p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={notetaker}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Note Taker</h1>
              <p>
                Note Taker is a simple application that lets the User easily
                take notes for their daily use.
              </p>
              <a
                href="https://ba-note-taker.herokuapp.com/"
                target="_blank no referrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">
            Weather Dashboard
          </p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={weatherdashboardpic}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Weather Dashboard</h1>
              <p>
                This app allows the user to search for the current weather of
                any city in the world along with a 5-day forecast.
              </p>
              <a
                href="https://codeb-a.github.io/Weather-Dashboard/"
                target="_blank no referrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card m-3 g-4">
          <p className="text-light text-center glow-small h6">
            Password Generator
          </p>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={passwordpic}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="flip-card-back bg-dark text-light">
              <h1>Password Generator</h1>
              <p>
                This application generates random passwords based on certain
                parameters selected by the user.
              </p>
              <a
                href="https://codeb-a.github.io/Password-Generator/"
                target="_blank no referrer"
                className="btn btn-info"
              >
                View My Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
