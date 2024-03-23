"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/NavBar"
import ThreeCanvas from "./components/ThreeCanvas"

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <ThreeCanvas />
    </main>
  );
}
