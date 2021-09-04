import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 text-light text-center position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2021 Brandon Akers</p>
        <a href="/" className="position-absolute bottom-0 end-0 p5">
          <i className="bi bi-arrow-up-circle h1 p-5"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
