import { useState } from 'react';
import './App.css';


let output = " "

function App() {
 
  console.log(output);
  const handleClick = (val) => {
    output += val
    setDisplay(output);
  }

  const total = ()=>{
   setDisplay(eval(output))
   output = " "
   
  }
  const clear = ()=>{
    setDisplay(" ")
    output = " "
  }

  
  const [display, setDisplay] = useState("0")

  return (
    <div className="App">
      
      <div className="title">Calculator</div>

         <div className="calculator">
            <div className="screen" id="screen">{display}</div>
            <div className="cal-container">
                <button onClick= {() => handleClick("1")}>1</button>
                <button onClick= {() => handleClick("2")}>2</button>
                <button onClick= {() => handleClick("3")}>3</button>
                <button onClick= {() => handleClick("+")}>+</button>
                <button onClick= {() => handleClick("4")}>4</button>
                <button onClick= {() => handleClick("5")}>5</button>
                <button onClick= {() => handleClick("6")}>6</button>
                <button onClick= {() => handleClick("-")}>-</button>
                <button onClick= {() => handleClick("7")}>7</button>
                <button onClick= {() => handleClick("8")}>8</button>
                <button onClick= {() => handleClick("9")}>9</button>
                <button onClick= {() => handleClick("/")}>/</button>
                <button onClick= {clear}>C</button>
                <button onClick= {() => handleClick("0")}>0</button>
                <button onClick= {total}>=</button>
                <button onClick= {() => handleClick("*")}>X</button>
            </div>
        </div>
    </div>
  );
}

export default App;
