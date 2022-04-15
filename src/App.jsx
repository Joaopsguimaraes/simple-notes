import "./App.css";
import HomeNotes from "./components/HomeNotes";
import { NoteProvider } from "./context/noteContext";

const App = () => {
  return (
    <NoteProvider>
      <HomeNotes />
    </NoteProvider>
  );
};

export default App;
