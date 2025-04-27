"use client";

import { useEffect, useState } from "react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { showPage, contemporary } from "./../app/page-functions";

export default function App() {
  useEffect(() => {
    const handlePageLoad = () => {
      showPage("personal"); // Call your function after the DOM is fully loaded
    };

    // Wait for the window to fully load
    if (document.readyState === "complete") {
      handlePageLoad(); // If already loaded, call immediately
    } else {
      window.addEventListener("load", handlePageLoad); // Otherwise, wait for the load event
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const [selectedButton, setSelectedButton] = useState("personal");

  const handleButtonClick = (page: string) => {
    setSelectedButton(page); // Update the selected button
    showPage(page); // Call the showPage function
  };

  return (
    <main>
      <div id="topbar">
        <h1 id="text">Laney's Portfolio</h1>
        <div id="selection">
          <div
            className={`button ${
              selectedButton === "contemporary" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("contemporary")}
          >
            Observational
          </div>
          <div
            className={`button ${
              selectedButton === "personal" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("personal")}
          >
            Personal
          </div>
        </div>
        <div id="gallery">{contemporary}</div>
      </div>
    </main>
  );
}
