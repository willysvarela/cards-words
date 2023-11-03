import { getJSONValue, setJSONValue } from "@/utils/localStorage";
export const WORDS_INDEX_USED = 'words-index-used';

export const chooseCard = (words) => {
    let choosedPosition = getPosition(words.length);
    let hasBeenUsed = hasCardPositionBeenAlreadyUsed(choosedPosition, words);
    while(hasBeenUsed) {
        choosedPosition = getPosition(words.length);
        hasBeenUsed = hasCardPositionBeenAlreadyUsed(choosedPosition, words);
    }
    const choosedCard = words[choosedPosition];
    updateStoredValues(choosedPosition);
    return choosedCard;
}

export const getPosition = (wordLength) => {
    return Math.floor(Math.random() * wordLength);
}

export const hasCardPositionBeenAlreadyUsed = (index, words) => {
    const wordsStored = getJSONValue(WORDS_INDEX_USED);

    if (!wordsStored || wordsStored?.length === words.length) {
        setJSONValue(WORDS_INDEX_USED, []);
        return false;
    }
    const hasBeenUsed = wordsStored.filter(wordIndex => wordIndex === index).length > 0
    return hasBeenUsed;
}

export const updateStoredValues = (value) => {
    const storedValue = getJSONValue(WORDS_INDEX_USED);
    const updatedStoredValue = [...storedValue, value];
    setJSONValue(WORDS_INDEX_USED, updatedStoredValue);
    return updatedStoredValue;
}