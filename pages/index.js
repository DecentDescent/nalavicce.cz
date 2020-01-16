import React, { Component, useState } from "react";
import classnames from "classnames";

import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Dialog from "../components/Dialog";
import Team from "../components/Team";
import Footer from "../components/Footer";
import styles from "../styles/general.scss";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function IndexPage() {
  // Declare a new state variable, which we'll call "count"
  const [dialogState, setDialog] = useState(false);
  const [dialogTitle, setTitle] = useState("Title");
  const [dialogContent, setContent] = useState("Content");

  let dialogRenderer = function(title, content) {
    console.log(title, content);
  };

  return (
    <div
      className={classnames({
        [styles["body"]]: true,
        [styles["body--dialog"]]: dialogState
      })}
    >
      <Head />
      <Hero />
      <HowItWorks />
      <Team />
      <Contact />
      <Footer />
      <Dialog
        dialogState={dialogState}
        dialogClose={() => setDialog(false)}
        title={dialogTitle}
        content={dialogContent}
      />
    </div>
  );
}
export default IndexPage;
