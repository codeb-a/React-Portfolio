import React from "react";

const Contactme = () => {
  return (
    <section id="contactme" className="text-light p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h1 className="text-center p-5 glow">CONTACT INFO</h1>
            <p className="text-center lead">
              <i className="bi bi-envelope p-2"></i>brandonakers729@gmail.com
            </p>
            <div className="text-center h1">
              <button>
                <i className="bi bi-github"></i>
                <link to="https://github.com/codeb-a" target="_blank"></link>
              </button>
              <button>
                <i className="bi bi-linkedin"></i>
                <link
                  to="https://www.linkedin.com/in/b-akers/"
                  target="_blank"
                ></link>
              </button>
              <button>
                <i className="bi bi-instagram"></i>
                <link
                  to="https://www.instagram.com/b_boss729/"
                  target="_blank"
                ></link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
