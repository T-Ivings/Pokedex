'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Svg from '../SVG/Svg';
import Pokemon from '../../../../public/pikachu.webp'
import hexagon from "../../../../public/hexagon.svg";

import pokeballBW from "../../../../public/pokeball-black-and-white.svg";
import pokeballColour from "../../../../public/pokeball-colour.svg";


export default function NameCard({ pokemonName, index }: { pokemonName: string; index: number; }) {
  // const [pokemonCaughtState, setPokemonCaughtState] = useState(pokeballBW)

  // function addToCollection() {

  //   function handleClick() {
  //     setPokemonCaughtState();
  //     console.log(pokemonCaughtState)

  //     useEffect(() => {
  //         console.log(pokemonCaughtState, '- Has changed')
  //     },[pokemonCaughtState]) 
  //   }
  // }
  const classes = (index == 3 ? 'active' : '');

    return (
      <div className={classes}>
        <div className="card__inner-container ">
          <div className="card__image-container bg-[#101010]">
            <Image src={ Pokemon } className="h-auto z-50 -left-12 -top-4 ml-4 absolute" alt="" />
            <Image className="scale-x-150 -ml-8 -my-3" src={hexagon} alt="" />
          </div>
          <div className="card__caught-info">
          <div className='max-w-[90px]'>
            <Svg imagePath={ pokeballBW }/>
          </div>
        </div>
        <div className="card__content -ml-4 flex justify-center  text-xl lg:text-5xl -skew-x-12">
          <div className="my-auto whitespace-nowrap">{pokemonName}</div>
        </div>
      </div>
    </div>
    );
  }
