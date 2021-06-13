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
      {paintings.map((el) => (
        <Paintings
          key={el.id}
          url={el.url}
          title={el.title}
          price={el.price}
          id={el.id}
          quantity={el.quantity}
        />
      ))}
    </div>
  );
}

export default App;
