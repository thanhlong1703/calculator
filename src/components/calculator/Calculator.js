import React from "react";
import "./calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_NUMBERS,
  BUTTON_CLEAR,
  BUTTON_EQUAL,
  BUTTON_DEL,
} from "../../redux/reducers";

const Calculator = () => {
  const valueDisplay = useSelector((state) => state.calc.display); //tham so truyen vao useSelector la 1 function, tham so truyen vao function la 1 state
  console.log(valueDisplay);
  const dispatch = useDispatch();
  const btnClick = (e) => {
    dispatch(ADD_NUMBERS(e.target.value));
  };
  const resultDisplay = useSelector((state) => state.calc.result);
  console.log(resultDisplay);
  const clearDisplay = useSelector((state) => state.calc.display);
  console.log(clearDisplay);

  return (
    <div>
      <div className="wrapper">
        <div className="display">
          <div className="calculator_result ">{resultDisplay}</div>
          <div className="calculator_result_exp">{valueDisplay}</div>
        </div>
        <div className="keyboard">
          <div className="operation" onClick={btnClick}>
            <button className="buttons" value="+">
              +
            </button>
            <button className="buttons" value="-">
              -
            </button>
            <button className="buttons" value="*">
              *
            </button>
            <button className="buttons" value="/">
              /
            </button>
          </div>
          <div className="numbers" onClick={btnClick}>
            <button className="buttons" value="1">
              1
            </button>
            <button className="buttons" value="2">
              2
            </button>
            <button className="buttons" value="3">
              3
            </button>
            <button className="buttons" value="4">
              4
            </button>
            <button className="buttons" value="5">
              5
            </button>
            <button className="buttons" value="6">
              6
            </button>
            <button className="buttons" value="7">
              7
            </button>
            <button className="buttons" value="8">
              8
            </button>
            <button className="buttons" value="9">
              9
            </button>
            <button className="buttons" value=".">
              🌞
            </button>
            <button className="buttons" value="0">
              0
            </button>
            <button className="buttons" value=".">
              .
            </button>
          </div>
          <div className="option">
            <button className="buttons">ANS</button>
            <button
              className="buttons"
              onClick={() => {
                dispatch(BUTTON_CLEAR());
              }}
            >
              C
            </button>
            <button
              className="buttons"
              onClick={() => {
                dispatch(BUTTON_DEL());
              }}
            >
              Del
            </button>
            <button
              className="buttons"
              onClick={() => {
                dispatch(BUTTON_EQUAL());
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
