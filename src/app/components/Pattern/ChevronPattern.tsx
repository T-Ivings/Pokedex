import Chevron from "./Chevron";
import "./chevron.scss"


function isEven(n: number) {
  return n % 2 == 0;
}

const ChevronPattern = () => {
    const chevronHeight = 192;
    const numberOfChevrons = 2;
  
    return (
      <div className="chevron__container">
        {Array.from({ length: numberOfChevrons }).map((_, index) => (
          <Chevron key={index} height={chevronHeight} isFirstLoop={isEven(index)} />
        ))}
      </div>
    );
  };

  export default ChevronPattern;