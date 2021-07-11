import paintings from './data/paintings.json';
import Container from './components/Container/Container';
import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
    <div className="App">
      <Container>
        <PaintingList items={paintings} />
        <ColorPicker options={colorPickerOptions} />
        <Alert text="Шеф все пропало!!" type="alert" />
        <Alert text="Шеф все пропало!!" type="alertSuccessfully" />
        <Alert text="Шеф все пропало!!" type="alertError" />
      </Container>
    </div>
  );
}

export default App;
