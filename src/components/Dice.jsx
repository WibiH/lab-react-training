import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyImg from './../assets/images/dice-empty.png';
import { useState } from 'react';

const randomImg = [dice1, dice2, dice3, dice4, dice5, dice6];

const chooseRandomImg = () => {
  return randomImg[Math.floor(Math.random() * randomImg.length)];
};

const Dice = () => {
  const [image, setImage] = useState(emptyImg);

  const handleImageChange = () => {
    setImage(chooseRandomImg);
  };

  return (
    <div className="dice" style={{}}>
      <img
        src={image}
        alt={image}
        style={{ width: '20%' }}
        onClick={handleImageChange}
      />
    </div>
  );
};

export default Dice;
