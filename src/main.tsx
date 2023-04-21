import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { TabContextProvider } from "./contexts/tab.context.tsx";
import { TagContextProvider } from "./contexts/tags.context.tsx";
import { TaskContextProvider } from "./contexts/tasks.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TagContextProvider>
      <TaskContextProvider>
        <TabContextProvider>
          <App />
        </TabContextProvider>
      </TaskContextProvider>
    </TagContextProvider>
  </React.StrictMode>
);
