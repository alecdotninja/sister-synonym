import database from './data/phonemes.json';

export default (word) => (
    word && database[word.toLowerCase()]
);