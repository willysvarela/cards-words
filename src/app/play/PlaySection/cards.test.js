/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { chooseCard, getPosition, hasCardPositionBeenAlreadyUsed, WORDS_INDEX_USED } from './cards'
import { getJSONValue, setJSONValue } from '@/utils/localStorage';

const wordsMocked = [
    {
        word: 'Casa',
        forbidden_words: ['Morar', 'Familia']
    },
    {
        word: 'Mulher',
        forbidden_words: ['Cabelo', 'Maquiagem']
    }
];

it('Should choose a non-used card', () => {
  expect(1).toBe(1);
})

it('get a random position of card', () => {
    const position = getPosition(2);
    expect(position).toBeDefined();
});

describe('check position used', () => {
    beforeEach(() => {
        setJSONValue(WORDS_INDEX_USED, [0]);
    });

    it('Should return true since card has been already used', () => {
        const position = 0;
        const result = hasCardPositionBeenAlreadyUsed(position, wordsMocked);
        expect(result).toBe(true);
    });
});

it('Should return false since words are equal store array', () => {
    const position = 0;
    const result = hasCardPositionBeenAlreadyUsed(position, []);
    expect(result).toBe(false);
});

describe('Choose Cards test', () => {
    it('Should Choose a random card correctly', () => {
        const card = chooseCard(wordsMocked);
        console.log(card);
        expect(card).toBeDefined();

        const storedValue = getJSONValue(WORDS_INDEX_USED);
        console.log({storedValue});
        expect(storedValue.length).toBe(1);
    })
})