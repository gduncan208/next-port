"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import FadeIn from "./components/FadeIn";
import Contact from "./components/Contact";

export default function Home() {

  return (
      <main className={styles.main}>
        <NavBar />
        <About />
        <Projects />
        <Contact />
      </main>
  );
};
