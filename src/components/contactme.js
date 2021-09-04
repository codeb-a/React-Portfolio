import React from "react";

const Contactme = () => {
  return (
    <section id="contactme" class="text-light p-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md">
            <h1 class="text-center p-5 glow">CONTACT INFO</h1>
            <p class="text-center lead">
              <i class="bi bi-envelope p-2"></i>brandonakers729@gmail.com
            </p>
            <div class="text-center h1">
              <a
                href="https://github.com/codeb-a"
                target="_blank rel=noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/b-akers/"
                target="_blank rel=noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/b_boss729/"
                target="_blank rel=noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
