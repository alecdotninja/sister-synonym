import synonyms from './synonyms';
import phonemes from './phonemes';

export const isSisterSatisfactory = (word) => {
    if (!word || word.includes(' ')) {
        return false;
    }

    const pronunciation = phonemes(word);

    if (pronunciation) {
        return pronunciation[0] === 'S';
    } else {
        return word[0].toUpperCase() === 'S';
    }
};

export default (word) => synonyms(word).filter(isSisterSatisfactory);