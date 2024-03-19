import React from "react";
import Lottie from "lottie-react";
import Test_Animation from '../../../Assets/Test_Animation.json';
import "./About.css";
import "animate.css";


const About = () => {
  return (
    <div id="about">
      <div className="About_Image_Container">
        <div>
          <Lottie animationData={Test_Animation}></Lottie>
        </div>
        <div className="About_List_Container">
          <p class="line animate__animated animate__pulse">About Me</p>
          <p className="About_P2">
            Yo !
            <br />
            I'm Aymane, I'm a software engineer from Casablanca, Morocco. <br />
            I enjoy creating things that exist online, Whether it is a website,
            application or anything in between. <br />
            My goal is to build a performant and robust product that provides
            the user with a great experience. <br />
            I fell in love with software development and I find its a constant
            learning experience every day. <br />
            Here are some technologies I've been working with recently:
          </p>
          <div className="Hero_List_Container">
            <ul className="Hero_List_Line1">
              <li>ReactJs</li>
              <li>SpringBoot</li>
            </ul>
            <ul className="Hero_List_Line2">
              <li>React Native</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default About;
