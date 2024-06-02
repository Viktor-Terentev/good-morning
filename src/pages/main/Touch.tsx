import { useState } from 'react';

const MyComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div onClick={handleClick}>
      {isClicked ? 'Ты красотка!' : 'Нажми на меня'}
    </div>
  );
};

export default MyComponent;