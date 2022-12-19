import React from 'react'
import "./calc.css"
import {useState, useRef } from "react";
import * as math from 'mathjs';
export default function Calc() {
    let [board, setBoard] = useState("");
    let [result, setResult] = useState("");
    const ref = useRef(null);

    function getValue(text) {
      switch (text) {
        case '+':
          return '+'
        case 'x':
          return '*'
        case '√':
          return 'sqrt('
        case 'x!':
          return '!'
        case '−':
          return '-'
        case '÷':
          return '/'
        case 'tan':
          return 'tan(deg '
        case 'cos':
          return 'cos(deg '
        case 'x y':
          return '^'
        case 'sin':
          return 'sin(deg '
        case 'log':
          return 'log('
        case 'ln':
          return 'ln('
        case 'EXP':
          return '*10^'
        default:
          return text;
      }
    }

    function ln2log() {
      const ln = 'ln(', closure = ')', val = board
      let start = val.indexOf(ln)
      let end = val.indexOf(closure, start)
      let num = val.substring(start + 3, end);

      if (start !== -1) {
        setBoard(val.substring(0, start) + "log(" + num + ",e)" + val.substring(end + 1, val.length))
      }
    }


    return (
      <div ref={ref} class="main">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.3.1/math.js"
          integrity="sha512-Q1qOFs0DNtp9bviP8uSyPm0d1ES7zw8BXZ7AF2XCWIVKHObK6U7mkMZ+SGOf1vF71zI/60lO+FjBTrzaYGRqnw=="
          crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <div class="container">
          <div class="display">
            <input type="text" className="result" value={board} disabled="disabled" />
            <input type="text" value={result} class="input-box" disabled="disabled" placeholder="0" />
          </div>
          {/* <!-- First--> */}
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>Deg</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x!</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>(</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>)</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>%</button>
          <button class="btn" onClick={() => {
            setResult("")
            setBoard("")
          }}>AC</button>
          {/* <!-- Second--> */}
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>sin</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>ln</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>7</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>8</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>9</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>÷</button>
          {/* <!-- Third--> */}
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>cos</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>log</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>4</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>5</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>6</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x</button>
          {/* <!-- Fourth--> */}
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>tan</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>√</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>1</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>2</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>3</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>−</button>
          {/* <!-- Fifth--> */}
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>EXP</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x <span class="exponent">y</span></button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>0</button>
          <button class="number btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>.</button>
          <button class="res btn" onClick={() => {
            try {
              ln2log()
              let res = math.evaluate(board);
              math.format(res, { precision: 10 });
              setResult(res)
              setBoard("")
            } catch (error) {
              setResult("err")
              setBoard("")
            }
          }}>=</button>
          <button class="btn" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>+</button>
        </div>
      </div>
    )
}
