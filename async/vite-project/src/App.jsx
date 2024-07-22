
import './App.css';
import FakeStoreGallery from './Components/Fake';
import PokeGallery from './Components/Poke';
import RandomUserGallery from './Components/Random';

const App = () => {
  return (
    <div>
      <h1>API Galleries</h1>
      <FakeStoreGallery />
      <PokeGallery />
      <RandomUserGallery />
    </div>
  );
};

export default App;
