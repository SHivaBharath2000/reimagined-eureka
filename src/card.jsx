// import { useState } from "react";
import { Link } from "react-router-dom";
function Card() {
  return(
    <>
     <div className="container-xxl">
        <div className="navbar">
          <h2 style={{ fontWeight: "bold" }}>GUVI</h2>
         
    
            <Link to={"/full-stack-development"}><h3>Full stack development </h3></Link>
            <Link to={"/artificial-intelligence"}><h3>Artificial Intelligence </h3></Link>
            <Link to={"/data-science"}><h3>Data Science </h3></Link>
         
        </div>
        <div className="main">
          <div className="row align-items-start">
            <div className="col">
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Built your career with guvi
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                  GUVI – India’s Pioneering Vernacular EdTech, incubated by
                  IIT-M, IIM-A, and a prestigious part of the HCL group.
                  Empowering over 2.5 million global learners with top-tier
                  educational solutions through a vernacular approach.
                  GUVI is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.
                </h4>
              </p>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?w=740&t=st=1715016460~exp=1715017060~hmac=0305690a58c52b7f6cef58a0060c44a53d71d48d06f63c0eb77ef5c564fb425e"
              />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Card;

