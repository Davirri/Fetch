import { useEffect, useState } from 'react';

const PokeGallery = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      }));
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="gallery">
      <h2 className='gallery-h2'>Pokemons</h2>
      <div className="items">
        {pokemons.map(pokemon => (
          <div key={pokemon.id} className="item">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeGallery;
