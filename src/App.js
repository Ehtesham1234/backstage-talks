// App.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = [
    "#ff608c",
    "#ffffff",
    "#00c1b5",
    "#ff6519",
    "#ffbe00",
    "#e30512",
    "#1d3fbb",
  ];

  const handleScroll = useRef((event) => {
    const cards = document.getElementsByClassName("body__card");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardTop = card.getBoundingClientRect().top + window.scrollY;

      if (
        scrollPosition >= cardTop &&
        scrollPosition < cardTop + card.offsetHeight
      ) {
        setBgColor(colors[i % colors.length]);
        break;
      }
    }
  }).current;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id="root" style={{ backgroundColor: bgColor }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

//make footer similar like magzine
// Add those changes
