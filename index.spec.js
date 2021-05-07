const SUT = require('./index');

describe('Berlin Clock', () => {

    it('will do nothing', () => {
        expect(SUT.func()).toBeNull();
    });

});