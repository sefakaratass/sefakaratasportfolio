import React from "react";
import "../styles/Home.css";
import data from '../data/db.json';

function Home() {
  return (
    <section id="home">
      <div className="homeContent">
      {data?.home?.map((item, index) => (
        <div key={index}>
        <span className="hello">{item.span1}</span><br/>
        <span className="homeText">
          {item.span2} {""}
          <span className="homeName">{item.span3}</span>
          <br />
          {item.span4}
        </span>
        <p className="homeP">{item.p}</p>
        </div>
      ))}
        </div>
      <img className="homeImg" src="/assets/ves.png" alt=""/>
    </section>
  );
}

export default Home;
