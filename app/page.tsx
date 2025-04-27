"use client";

import { useEffect, useRef } from "react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { showPage } from "./../app/page-functions";

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

  return (
    <main>
      <div id="topbar">
        <h1 id="text">Laney's Portfolio</h1>
        <div id="selection">
          <button id="PageContemporary" onClick={() => showPage("contemporary")}>
            Observational
          </button>
          <button id="PagePersonal" onClick={() => showPage("personal")}>
            Personal
          </button>
        </div>
        <div id="gallery"></div>
      </div>
    </main>
  );
}
