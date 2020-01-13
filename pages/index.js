import React, { Component, useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Footer from "../components/Footer";
class IndexPage extends Component {
  render() {
    return (
      <>
        <Head />
        <Team />
        <Footer />
      </>
    );
  }
}

export default IndexPage;
