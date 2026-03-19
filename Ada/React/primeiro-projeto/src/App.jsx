import React from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import {Counter} from "./components/Counter/Counter"

import art1IMG from "./assets/images/article.webp";
import art2IMG from "./assets/images/article1.jfif";
import art3IMG from "./assets/images/article2.jpg";

class App extends React.Component {
  render() {
    return  ( 
      <>
        <Navbar />

        {/* <section id="articles">
          <Article
            title="Desingning Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem natus vitae odio alias? Voluptatum labore dolor maiores laboriosam cumque nulla incidunt optio enim fugiat! Aliquam non dolorem harum dignissimos."
            thumbnail={art1IMG}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem natus vitae odio alias? Voluptatum labore dolor maiores laboriosam cumque nulla incidunt optio enim fugiat! Aliquam non dolorem harum dignissimos."
            thumbnail={art2IMG}
          />

          <Article
            title="36 Days of  Malayalam Type"
            provider="SpaceFlight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem natus vitae odio alias? Voluptatum labore dolor maiores laboriosam cumque nulla incidunt optio enim fugiat! Aliquam non dolorem harum dignissimos."
            thumbnail={art3IMG}
          />

          <Article
            title="Desingning Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem natus vitae odio alias? Voluptatum labore dolor maiores laboriosam cumque nulla incidunt optio enim fugiat! Aliquam non dolorem harum dignissimos."
            thumbnail={art1IMG}
          />
        </section> */}

        <Counter />
      </>
    );
  }
}

export default App;
