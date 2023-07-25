import React from "react";

import { logo1 } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo1} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/murtazaghulam99/ai-article-summarizer",
              "_blank"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="modern_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Unleash the Power of Concise Insights!
        Simplify your reading with our cutting-edge, open-source article
        summarizer. Say goodbye to lengthy articles and embrace clear,
        captivating summaries that spark curiosity and boost your
        understanding.
      </h2>
    </header>
  );
};

export default Hero;
