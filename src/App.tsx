import "./App.css";
import InitialScreen from "./components/InitialScreen";
import Resume from "./components/Resume";
import BubbleAnimationProvider from "./store/BubbleAnimationProvider";

function App() {
  // Have toggles to show all descriptions
  return (
    <div className="flex flex-col ">
      <InitialScreen />
      <BubbleAnimationProvider>
        <Resume />
      </BubbleAnimationProvider>
    </div>
  );
}

export default App;
