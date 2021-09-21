import React, { useState } from 'react';
import Child from './components/Child';

function App() {
  const [ word, setWord ] = useState('Gurgel');  


  return (
    <>
    <h1>{word}</h1>
    <Child 
      changeWord={word => setWord(word)}
    />
    </>
  );
}

export default App;