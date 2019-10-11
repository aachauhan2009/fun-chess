import React from "react";
import { getValues } from "jest-validate/build/condition";

const getTop = index => {
  switch(true) {
    case index < 4: return null;
    default: return index - 4;
  }
}

const getBottom = index => {
  switch(true) {
    case index > 12: return null;
    default: return index + 4;
  }
}

const getRight = index => {
  switch(true) {
    case index % 4 === 0: return null;
    default: return index + 1;
  }
}

const getLeft = index => {
  switch(true) {
    case index % 4 === 1: return null;
    default: return index - 1;
  }
}

const mapper = [
  "",
  "🐘",
  "🦁",
  "🐯",
  "🐺",
  "🦊",
  "🐶",
  "🐱",
  "🐀",
  "🐘",
  "🦁",
  "🐯",
  "🐺",
  "🦊",
  "🐶",
  "🐱",
  "🐀",
]

function Box({
  position,
  value,
  onClick
}) {
  return <div className={`box ${value ? (value > 8 ? "box--blue" : "box--red") : ""}`} onClick={onClick}>{mapper[value]}</div>
};

function Game() {
  const [boxes, setBoxes] = React.useState([{
    position: 1,
  }, {
    position: 2
  }, {
    position: 3
  }, {
    position: 4
  }, {
    position: 5
  }, {
    position: 6
  }, {
    position: 7
  }, {
    position: 8
  }, {
    position: 9
  }, {
    position: 10
  }, {
    position: 11
  }, {
    position: 12
  }, {
    position: 13
  }, {
    position: 14
  }, {
    position: 15
  }, {
    position: 16
  }]);

  const valueRef = React.useRef([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

  const getValue = () => {
    const randomIndex = Math.floor(Math.random() * valueRef.current.length);
    const value = valueRef.current[randomIndex]
    valueRef.current.splice(randomIndex, 1);
    return value;
  }

  const onBoxClick = position => () => {
    setBoxes(boxes.map(box => box.position === position && !box.value ? {...box, value: getValue()} : box));
  };
  return <div className="game">
    {boxes.map(box => <Box className="box" key={box.position} onClick={onBoxClick(box.position)} {...box} />)}
  </div>
};

export default Game;