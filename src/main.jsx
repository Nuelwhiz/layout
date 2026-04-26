import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tailwind from "./exercise/tailwind.jsx";
import Tail from "./exercise/tailcss.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*   <App /> */}
   {/*  <Tailwind /> */}
    <Tail />
  </StrictMode>,
);
