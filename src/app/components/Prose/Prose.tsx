'use client';
import React, {useEffect, useState} from 'react';
import { PokemonClient } from 'pokenode-ts';

const Prose = () => {
    const [activePokemon, setActivePokemon] = useState("Bulbasaur"); // Initial active number

    useEffect(() => {
      const currentPokemon = document.querySelector('.active')?.innerHTML;
        setActivePokemon(currentPokemon!);

        console.log(activePokemon)
      });

// `      const getPokemoncontent = (async () => {
//         const api = new PokemonClient();
      
//         await api
//           .getPokemonByName('luxray')
//           .then((data) => console.log(data.name)) // will output "Luxray"
//           .catch((error) => console.error(error));
//       })();
  return (
    <p className="absolute top-1/2 left-4">
test
    </p>
  );
};

export default Prose;