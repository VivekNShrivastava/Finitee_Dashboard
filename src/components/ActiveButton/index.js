import React from 'react';
import './activebutton.css'
import check from "../../assets/icons/Check.png"
import { useState } from 'react';
const CustomButton = ({name}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {

    setIsClicked(!isClicked);
  };



  return (
    <button className={`status ${isClicked ? 'clicked' : ''}`}   onClick={handleClick}>
      <img src={check}></img> {name}
    </button>
  );
};

export default CustomButton;
