import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/lottie-player";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="about-container" id="about">
        <div className="lottie">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <Lottie options={defaultOptions} height={350} width={350} />
        </div>
        <div className="about">
          <div className="para">
            <p>
              Hi, I'm Tajender Batra, a web and app developer specializing in
              frontend technologies. With a Bachelor's in Computer Applications
              and 2 years of startup experience, I'm passionate about crafting
              captivating web and mobile applications. Let's bring your ideas to
              life!
            </p>
          </div>
          <div className="skill">
            <div>
              <span>Languages : HTML, CSS, JAVASCRIPT, PHP</span>
              <span>Database : MYSQL, MONGODB</span>
            </div>
            <div>
              <span>ReactJs</span>
              <span>
                React
                <br />
                Native
              </span>
              <span>NodeJs</span>
              <span>ExpressJs</span>
              <span>Redux</span>
              <span>Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
