import React from "react";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="welcome-msg">
        <h3>Welcome, Dev.</h3>
        <p>
          So, a colleague said you were witty during yesterday morning's
          stand-up...
        </p>
        <p>And you thought, "Hey, why not try moonlighting as a comedian?"</p>

        <p>You've come to the right place. </p>

        <p>
          DevWit allows you to generate random programming-related jokes and add
          them to your "set" so that you can impressive your colleagues with
          your hilarious comedy <i>bits</i>.
        </p>
      </section>
    </main>
  );
}

export default Home;
