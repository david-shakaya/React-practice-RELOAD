import paintings from "./data/paintings.json";
import Paintings from "./components/Painting";
const link = "google";

function App() {
  return (
    <div className="App">
      <h1>This is link go to the google</h1>
      <a className={link} href="www.google.com" target="_blank">
        {link}
      </a>
      <Paintings
        url={paintings[1].url}
        title={paintings[0].title}
        price={paintings[0].price}
        id={paintings[0].id}
      />
    </div>
  );
}

export default App;
