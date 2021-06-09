const link = "google";

function App() {
  return (
    <div className="App">
      <h1>This is link go to the google</h1>
      <a className={link} href="www.google.com" target="_blank">
        {link}
      </a>
    </div>
  );
}

export default App;
