import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./Pages/NotFound";
import { AboutPomodoro } from "./Pages/AboutPomodoro";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/about-pomodoro"
              element={<AboutPomodoro></AboutPomodoro>}
            />

            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
