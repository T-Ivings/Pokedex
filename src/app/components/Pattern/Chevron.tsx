import React from 'react';

interface ChevronProps {
  height: number;
  isFirstLoop: boolean
}

const Chevron = ({ height, isFirstLoop }: ChevronProps) => {
  const firstLoopClass = isFirstLoop ? '-ml-8' : '';
  const classes = `${firstLoopClass} bg-grey-tundora`;

  return (
    <div
      style={{
        width: `300px`,
        height: `${height}px`,
        clipPath: 'polygon(25% 0%, 100% 0, 75% 50%, 100% 100%, 25% 100%, 0% 50%)',
      }}
      className={classes}
    />
  );
};

export default Chevron;