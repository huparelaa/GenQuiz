import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GroupsProvider } from "./context/GroupsContext.jsx";
import { QuestionsProvider } from "./context/QuestionsContext.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GroupsProvider>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </GroupsProvider>
  </BrowserRouter>
);
