import React, { Component, useState, useEffect } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Dialog from "../components/Dialog";
import Team from "../components/Team";
import Footer from "../components/Footer";

function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}

function IndexPage() {
  // Declare a new state variable, which we'll call "count"
  const [dialogState, setDialog] = useState(false);
  const [dialogTitle, setTitle] = useState(undefined);
  const [dialogContent, setContent] = useState(undefined);
  const [dialogColor, setColor] = useState(undefined);

  useKeyboardEvent("Escape", () => {
    setDialog(false);
  });

  let modalToggle = function(color, title, content) {
    setColor(color);
    setTitle(title);
    setContent(content);
    setDialog(true);
  };

  useEffect(() => {
    if (dialogState) {
      document.body.classList.add("modal--active");
    } else {
      document.body.classList.remove("modal--active");
    }
  });

  return (
    <>
      <Head />
      <Header />
      <Hero />
      <About />
      <HowItWorks modalToggle={modalToggle} />
      <Team modalToggle={modalToggle} />
      <Contact />
      <Footer />
      <Dialog
        dialogClose={() => setDialog(false)}
        dialogState={dialogState}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        dialogColor={dialogColor}
      />
    </>
  );
}
export default IndexPage;
