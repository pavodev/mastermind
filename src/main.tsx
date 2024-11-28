import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Mastermind from "./Mastermind.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mastermind title={"Mastermind"} />
  </StrictMode>
);
