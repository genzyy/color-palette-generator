import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#e15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch(error) {
      console.log(error);
      setError(true);
    }
  }
  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          className={`${error ? 'error' : null}`}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
      </section>
      <section className="colors">
      {list.map((color, index) => {
        console.log(color)
        return <SingleColor key={index} {...color} index={index}
          hexColor={color.hex}
        />
      })}
    </section>
    </>
  );
}

export default App;