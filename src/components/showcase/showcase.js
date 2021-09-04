import React from "react";
import selfpic from "../images/IMG_3010.JPG";

const Showcase = () => {
  return (
    <section id="#" className=" text-light p-4 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between p-4 m-5">
          <div className="p-5 m-5">
            <h1 className="centering">
              FULL STACK <span className="text-info">WEB DEVELOPER</span>
            </h1>
            <p className=" centering lead my-4">
              “The biggest obstacle I ever faced was my own limited perception
              of myself.” – RuPaul
            </p>
            <div>
              <img
                className="self-pic img-fluid w-25 d-none d-sm-block"
                src={selfpic}
                alt={"selfpic"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
