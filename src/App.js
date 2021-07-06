import paintings from './data/paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';

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
      <PaintingList items={paintings} />
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
}

export default App;
