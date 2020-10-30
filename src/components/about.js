import React from "react";
import profile from "../assets/prof.jpg";
import github from "../assets/icons8-github-64.png";
import linkedin from "../assets/icons8-linkedin-64.png";

export default function About() {
  return (
    <section id="aboutme" className="card">
      <div className="three columns">
        <h2>About Me</h2>
        <img className="profile-pic" src={profile} alt="" />
      </div>

      <div className="nine columns main-col">
        <p>
          I am a Full-Stack JavaScript Developer with a background in the
          customer service and hospitality industries. I enjoy working with
          people and solving problems. I am a fast-learner and my love for
          learning drives me to build upon my already expanding skill sets. I am
          passionate about developing efficient, creative code to make a
          difference in the modern world. I have experience in JavaScript,
          React.js, Node.js, HTML5, CSS, jQuery, MongoDB, SQL, Wordpress and
          PHP.
        </p>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/daisyjane-johnson/"
                className="social-link"
              >
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/daisyjanejohnson"
                className="social-link"
              >
                <img src={github} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
