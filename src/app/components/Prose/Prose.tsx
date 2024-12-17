'use client';
import React, {useEffect, useState} from 'react';
import { PokemonClient } from 'pokenode-ts';

const Prose = () => {
    const [activePokemon, setActivePokemon] = useState("Bulbasaur"); // Initial active number
    let pokemonData: string = "";
    useEffect(() => {
      const currentPokemon = document.querySelector('.active')?.innerHTML;
        setActivePokemon(currentPokemon!);

      });

      const getPokemonContent = (async () => {
        const api = new PokemonClient();

        await api

          .getPokemonByName(activePokemon.toLowerCase())
          .then((data) => {pokemonData = data.name}) // will output "Luxray"
      })();

      getPokemonContent
  return (
    <p className="absolute top-1/2 left-4">
      {pokemonData}
    </p>
  );
};

export default Prose;