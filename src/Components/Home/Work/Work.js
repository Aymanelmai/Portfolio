import React from "react";
import "./Work.css";
import Blasti from "../../../Assets/Blasti.png";
import Nova from "../../../Assets/NovaEbanking1.png";
import SKShop from "../../../Assets/SKShop.png";

const Work = () => {
  return (
    <div id="work">
    <div className="Work_Container">
      <div className="Number_P1_Container">
        <p className="Number_Two">02.</p>
        <p className="Work_P1">Some Of My Work</p>
      </div>
      <div className="Image_Text_Container">
        <img src={Blasti} alt="Blasti" className="Images_Styling" />
        <p>
          Blasti is a mobile application developed using a combination of React
          Native, Java, MongoDB, and Spring technologies. Its core functionality
          revolves around providing users with the ability to register, log in,
          and reserve parking spots through a streamlined interface.
          <br />
          The application caters to the needs of clients seeking efficient
          parking solutions by offering a seamless experience for managing their
          parking reservations. With Blasti, users can easily register their
          accounts, securely log in, and conveniently reserve parking spots, all
          from within the application's intuitive user interface.
        </p>
      </div>

      <div className="Image_Text_Container">
        <img src={Nova} alt="Nova" className="Images_Styling" />
        <p>
          {" "}
          Nova stands out as an advanced application developed with React,
          SpringBoot, and MongoDB. <br /> This sophisticated platform not only
          enables users to sign up, log in, manage their account balance with
          diverse deposit options, and connect with other users but also
          incorporates essential features reminiscent of traditional banking
          applications. <br /> These include robust security measures,
          transaction history tracking, real-time account updates, customizable
          alerts, and seamless integration with financial services.
        </p>
      </div>

      <div className="Image_Text_Container">
        <img src={SKShop} alt="SKShop" className="Images_Styling" />
        <p>
          SKShop29 stands as a dynamic ecommerce platform crafted using ReactJS
          and SupaBase technologies. <br /> This user-friendly website
          prioritizes ease of use and navigation, ensuring that even clients
          with limited online ordering experience can effortlessly browse and
          place orders. <br /> Additionally, the website is designed to offer
          seamless maintenance for the owner, allowing them to effortlessly add
          or remove products, adjust prices, and manage inventory without the
          need for any programming language expertise.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Work;
