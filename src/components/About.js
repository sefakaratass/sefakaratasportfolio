import React from 'react';
import '../styles/About.css';
import data from '../data/db.json';

function About() {
  return (
    <section id="about" className="aboutSection">
      {data?.aboutImg?.map((item ,index) => (
        <div key={index}>
        <div className="aboutSectionImg">
        <img src="" alt="About Me" />
      </div>
      </div>
      ))}
      <div className="aboutContentBox">
        <div className="aboutContent">
        {data?.about?.map((item, index) => (
          <div key={index}>
          <h1 className="aboutTitle">Hakkımda</h1>
          <p className="aboutDescription">
          {item.aboutDescription}
          </p>
          <h2 className="hobbiesTitle">Hobiler</h2>
          <ul>
            <li className="hobbie1">{item.hobbie1}</li>
            <li className="hobbie2">{item.hobbie2}</li>
          </ul>
          </div>
        ))}  
        </div>
      </div>
    </section>
  );
}

export default About;
