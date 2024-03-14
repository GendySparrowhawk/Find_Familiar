import React from "react";

function Footer() {
  const date = new Date();

  return (
    <>
      <footer className="footer">
        <div>
          <a
            href="https://github.com/GendySparrowhawk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}


export default Footer;