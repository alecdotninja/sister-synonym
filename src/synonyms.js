import synonyms from './synonyms.json';

export default (word) => (
    (
        word && synonyms[word.toLowerCase()]
    ) || []
);