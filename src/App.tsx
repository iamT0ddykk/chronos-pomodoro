import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { MainRouter } from "./components/Routers/MainRouter";
export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter></MainRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
