'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import NameCard from './NameCard';
import "./card.scss"
import jsonData from "../../scripts/pokemon.json";

const CardContainer = () => {

  interface data {
    [key: string]: string;
  }

  function getKeyByValue(object: data, value: string): string | undefined {
    return Object.keys(object).find(key => object[key] === value);
  }

  function getSurroundingIndexes(index: number): number[] {
    const maxIndex = 1025;

    // Normalize the index to a value between 1 and 1025
    const normalizedIndex = ((index - 1) % maxIndex) + 1;
  
    const lowerBound = normalizedIndex - 3;
    const upperBound = normalizedIndex + 3;
  
    const numbers: number[] = [];
    for (let i = lowerBound; i <= upperBound; i++) {
      const normalizedNumber = i <= 0 ? maxIndex + i : i % maxIndex;
      numbers.push(normalizedNumber);
    }
    if (numbers.includes(0)) {
      numbers[numbers.indexOf(0)] += 1025;
    }
    return numbers;
  }
  
  function getSurroundingStrings(data: typeof jsonData): [string[]] {
    const listOfPokemon = getSurroundingIndexes(activeNumber).map((index) => { return data[index.toString()]}); 
    return [listOfPokemon];
  }

  const [activeNumber, setActiveNumber] = useState(1); // Initial active number
  
  let [pokemonList]: [string[]] = getSurroundingStrings(jsonData)


  const handleCardClick = (pokemon: string): void => {
    setTimeout(() => {
      setActiveNumber(Number(getKeyByValue(jsonData, pokemon)));
      document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('loading');
        document.body.style.cursor = "pointer";
      });
    }, 2000);

    document.body.style.cursor = "wait";
    document.querySelectorAll('.card').forEach((card) => {
      card.classList.add('loading');
    });
};

  useEffect(() => {
    [pokemonList] = getSurroundingStrings(jsonData);
  }, [activeNumber]);
  
  return (
    <div className='card__container' >
      {pokemonList.map((pokemon, index)=>
      <button key={index} onClick={() => handleCardClick(pokemon)} className={'card'}>
        <NameCard key={index} pokemonName={pokemon} index={index} />
      </button>
      )}
    </div>
  );
};

export default CardContainer;