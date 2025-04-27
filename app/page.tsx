"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { showPage } from "./../app/page-functions";


export default function App() {
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
