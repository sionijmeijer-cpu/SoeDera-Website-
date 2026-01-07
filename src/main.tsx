import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Only use Convex if the URL is configured
const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (convexUrl) {
  // Dynamic import to avoid loading Convex when not needed
  import("convex/react").then(({ ConvexProvider, ConvexReactClient }) => {
    const convex = new ConvexReactClient(convexUrl);
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <ConvexProvider client={convex}>
          <App />
        </ConvexProvider>
      </React.StrictMode>
    );
  });
} else {
  // Render without Convex
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
