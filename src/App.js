import React from "react";
import ShapeDiv from './components/ShapeDiv/index';


function App() {
  return (
    <div className="App">
      <h1>Click the Button and Change the Shape</h1>
      <div className="shapes" >
        <ShapeDiv className='round' />
        <ShapeDiv className='square' />
      </div>
    </div>
  );
}

export default App;
