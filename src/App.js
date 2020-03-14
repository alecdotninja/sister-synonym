import React, { useState } from 'react';
import indefinite from 'indefinite';
import thesaurus from 'thesaurus';
import pronunciationDictionary from 'cmu-pronouncing-dictionary';

import './App.css';

const sample = (options) => (
  options[Math.floor(options.length * Math.random())]
);

const isSisterSatisfactory = (word) => {
  if (!word) {
    return false;
  }

  // we only want one word
  if (word.indexOf(' ') !== -1) {
    return false;
  }

  const pronunciation = pronunciationDictionary[word];

  if (pronunciation) {
    return pronunciation[0] === 'S';
  } else {
    return word[0].toUpperCase() === 'S';
  }
};

const findSisterSynonymFor = (word) => {
  if (!word) {
    return;
  }

  const candidates =
    thesaurus
    .find(word)
    .filter(isSisterSatisfactory);

  return sample(candidates);
};

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
  const sisterSynonym = findSisterSynonymFor(word);

  return (
    <div className="App">
      <div className="question">
        What does James Charles call
        {' '}
        {indefinite(word, { articleOnly: true })}
        {' '}
        <input
          type="text"
          value={word}
          onChange={(event) => setWord(event.currentTarget.value)}
          size={word.length}
          autoFocus
        />
        ?
      </div>

      {sisterSynonym && (
        <div className="answer">
          He calls it
          {' '}
          <strong>a sister {sisterSynonym}</strong>
          .
        </div>
      )}
    </div>
  );
}

export default App;
