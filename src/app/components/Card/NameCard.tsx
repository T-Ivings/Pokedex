import Image from 'next/image';
import Form from 'next/form';
import Pokemon from '../../../../public/pikachu.webp'

import hexagon from "../../../../public/hexagon.svg";

export default function NameCard({ pokemonName }: { pokemonName: string }) {

    return (
      <div className="card border-b-[15px] border-r-[1px] ">
        <div className="card__inner-container">
            <div className="card__image-container bg-[#101010]">
              <Image src={ Pokemon } className="w-1/2 h-auto z-50 -left-12 -top-4 ml-4 absolute" alt="" />
              <Image className="scale-x-150 -ml-8 -my-3" src={hexagon} alt="" />
            </div>
            <div className="card__caught-info">
            <Form>
              <input type="radio"></input>
            </Form>
            </div>
            <div className="card__content">
            </div>
        </div>
    </div>
    );
  }
