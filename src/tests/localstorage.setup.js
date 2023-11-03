const { WORDS_INDEX_USED } = require("../app/play/PlaySection/cards");
const { clearValue } = require("./../utils/localStorage");

global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
};

afterEach(() => {
    clearValue(WORDS_INDEX_USED);
});