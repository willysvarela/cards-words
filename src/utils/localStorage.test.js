import { setJSONValue, getJSONValue } from './localStorage';
describe('Local Storage Tests', () => {
    it('test setJSONValue and getJSONValue', () => {
        const key = 'key-test';
        const valueJSON = [{word: 'word', forbidden_words: ['word-1', 'word-2']}]
        setJSONValue(key, valueJSON);
        const value = getJSONValue(key);
        expect(value).toStrictEqual(valueJSON);
    });
})