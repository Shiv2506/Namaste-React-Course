/***
 *
 * Creates A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * Can enable HTTPS on dev
 * Can change Port Number
 * Uses Consistent Hashing Algorithm for bundling
 * Zero Config
 * Tree Shaking
 * 
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 for parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2 "
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading1, heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(container);
