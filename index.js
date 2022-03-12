import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Box from './individualBox';

const App = () => {
  // const [boxes, setBoxes] = useState([1, 2, 3, 4, 5]);
  let defaultWord = 'Apple';
  // const [discolor, setdiscolor] = useState('black');
  // const [isActive, setisActive] = useState([true, false, false, false, false]);

  const [boxes, setBoxes] = useState([
    {box :0, discolor: 'black', isActive: true},
    {box :1, discolor: 'black', isActive: false},
    {box :2, discolor: 'black', isActive: false},
    {box :3, discolor: 'black', isActive: false},
    {box :4, discolor: 'black', isActive: false},
    {box :5, discolor: 'black', isActive: false},
    {box :6, discolor: 'black', isActive: false},
    {box :7, discolor: 'black', isActive: false},
    {box :8, discolor: 'black', isActive: false},
    {box :9, discolor: 'black', isActive: false},
    {box :10, discolor: 'black', isActive: false},
    {box :11, discolor: 'black', isActive: false},
    {box :12, discolor: 'black', isActive: false},
    {box :13, discolor: 'black', isActive: false},
    {box :14, discolor: 'black', isActive: false},
    {box :15, discolor: 'black', isActive: false},
    {box :16, discolor: 'black', isActive: false},
    {box :17, discolor: 'black', isActive: false},
    {box :18, discolor: 'black', isActive: false},
    {box :19, discolor: 'black', isActive: false}
  ]);
  const checkTheChar = (boxnum, letter) => {
    let values = boxes;
    let boxTobeUpdated = boxnum
    if(boxnum>4) {
      boxTobeUpdated = boxnum%5
    }
    if (letter.toLowerCase() != defaultWord[boxTobeUpdated].toLowerCase()) {
      values.forEach((index) => {
        values[boxnum].discolor = 'red'
      })
    }
    if (letter.toLowerCase() == defaultWord[boxTobeUpdated].toLowerCase()) {
      values.forEaceh((index) => {
        values[boxnum].discolor = 'green'
      })
    }
    values.forEach((el,index) => {
      if (index == boxnum+1) {
        values[index].isActive = true;
      } else {
        values[index].isActive = false;
      }
    });
    setBoxes([...values])
  };

  return (
    <>
    <div className="displayBoxes">
      {boxes.map((x) => (
        <Box
          key={x.box}
          boxNum={x.box}
          checkTheChar={checkTheChar}
          discolor={x.discolor}
          isActive={x.isActive}
        />
      ))}
    </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
