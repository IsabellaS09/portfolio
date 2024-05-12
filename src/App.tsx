import "./App.css";
import InitialScreen from "./components/InitialScreen";
import Resume from "./components/Resume";

function App() {
  // Have toggles to show all descriptions
  return (
    <div className="flex flex-col ">
      <InitialScreen />
      <Resume />
    </div>
  );
}

export default App;
