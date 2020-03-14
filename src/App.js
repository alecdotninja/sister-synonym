import React, { useState } from 'react';
import indefinite from 'indefinite';

import sisterSynonyms from './sisterSynonyms';
import './App.css';

const sample = (options) => (
  options.length > 0 ?
    options[Math.floor(options.length * Math.random())] :
    undefined
);

const initialWord = sample([
  'dog',
  'magician',
  'hug',
  'friend',
  'meal',
  'purse',
  'crisis',
]);

function App() {
  const [word, setWord] = useState(initialWord);
  const sisterSynonym = sample(sisterSynonyms(word));

  return (
    <div className="App">
      <div className="question">
        What does James Charles call{' '}
        {indefinite(word, { articleOnly: true })}{' '}
        <input
          type="text"
          value={word}
          onChange={(event) => setWord(event.currentTarget.value)}
          size={word.length || 1}
          autoFocus
        />
        ?
      </div>

      {sisterSynonym && (
        <div className="answer">
          He calls it {' '}
          <strong class="no-wrap">
            a sister {sisterSynonym}
          </strong>
          .
        </div>
      )}
    </div>
  );
}

export default App;
