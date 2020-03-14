import database from './data/synonyms.json';

export default (word) => (
    (
        word && database[word.toLowerCase()]
    ) || []
);