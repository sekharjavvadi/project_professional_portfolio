import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Team from "./container/Team/Team";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Team />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
