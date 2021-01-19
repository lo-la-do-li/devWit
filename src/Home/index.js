import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-msg" aria-label="devWit-welcome">
        <h3>Welcome, Dev.</h3>
      </div>
      <div className="app-description" aria-label="devWit-description">
        <p className="one">
          So, a colleague said you were witty during yesterday morning's
          stand-up...
        </p>
        <p className="two">
          And you thought, "Hey, why not try moonlighting as a comedian?"
        </p>

        <p className="three">You've come to the right place. </p>

        <p className="four">
          DevWit allows you to generate random programming-related jokes and add
          them to your "set" so that you can impress your colleagues with your
          hilarious comedy <i>bits</i>.
        </p>
      </div>
    </div>
  );
}

export default Home;
