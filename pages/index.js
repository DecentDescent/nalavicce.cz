import React, { Component, useState, useEffect } from "react";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Dialog from "../components/Dialog";
import Team from "../components/Team";
import Contact from "../components/Contact";
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
  const [dialogPhoto, setPhoto] = useState(undefined);
  const [dialogContent, setContent] = useState(undefined);
  const [dialogColor, setColor] = useState(undefined);

  useKeyboardEvent("Escape", () => {
    setDialog(false);
  });

  let modalToggle = function(title, color, photo, content) {
    setColor(color);
    setTitle(title);
    setContent(content);
    setPhoto(photo);
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
      <Hero />
      <About />
      <HowItWorks />
      <Team modalToggle={modalToggle} />
      <Contact />
      <Footer />
      <Dialog
        dialogClose={() => setDialog(false)}
        dialogState={dialogState}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        dialogColor={dialogColor}
        dialogPhoto={dialogPhoto}
      />
    </>
  );
}
export default IndexPage;
