import './App.css';
import FakeStoreGallery from './Components/Fake';
import PokeGallery from './Components/Poke';
import RandomUserGallery from './Components/Random';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState('fake');

  return (
    <div className='Container'>
      <h1>API Galleries</h1>

      <div>
        <button onClick={() => setVisible('fake')}>Show Fake Store</button>
        <button onClick={() => setVisible('poke')}>Show Pokemon</button>
        <button onClick={() => setVisible('random')}>Show Random User</button>
      </div>

      <div>
        {visible === 'fake' && <FakeStoreGallery />}
        {visible === 'poke' && <PokeGallery />}
        {visible === 'random' && <RandomUserGallery />}
      </div>
    </div>
  );
};

export default App;
