import React from "react";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home-container">
        <div className="welcome-msg" aria-labelledby="devWit-welcome">
          <h3>Welcome, Dev.</h3>
        </div>
        <div className="app-description" aria-labelledby="devWit-description">
          <p className="one">
            So, a colleague said you were witty during yesterday morning's
            stand-up...
          </p>
          <p className="two">
            And you thought, "Hey, why not try moonlighting as a comedian?"
          </p>

          <p className="three">You've come to the right place. </p>

          <p className="four">
            DevWit allows you to generate random programming-related jokes and
            add them to your "set" so that you can impressive your colleagues
            with your hilarious comedy <i>bits</i>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
