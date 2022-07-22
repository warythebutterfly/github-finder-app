import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This project was built by
        <strong>
          <a href="https://temitoyosi.herokuapp.com" target="_blank" rel="noreferrer"> Temitoyosi Osibemekun</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black">2.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By: &nbsp;
        <a className="text-black" href="https://twitter.com/hassibmoddasser">
           Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;
