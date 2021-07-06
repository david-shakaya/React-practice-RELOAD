import paintings from "./data/paintings.json";
import PaintingList from "./components/PaintingList";

function App() {
  return (
    <div className="App">
      <PaintingList items={paintings} />
      <div><div>
    </div>
  );
}

export default App;
