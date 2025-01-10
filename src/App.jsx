import { useState } from "react"
import React from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-ful h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button onClick={()=> setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'blue'}}
          >Blue</button>
          <button onClick={()=> setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'green'}}
          >Green</button>
          <button onClick={()=> setColor('magenta')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'magenta'}}
          >magenta</button>
          <button onClick={()=> setColor('aqua')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'aqua'}}
          >Aqua</button>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-1 inset-x-0 px-2">
          <div className="shadow-lg bg-black px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("white")} className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: 'white'}}>Reset</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default App
