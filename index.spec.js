const SUT = require('./index');

describe('Berlin Clock', () => {

    it('will return 0000 for no minutes', () => {
        const time = '00:00:00'
        expect(SUT.func(time)).toBe('0000');
    });

    it('will return 1000 for one minutes', () => {
        const time = '00:01:00'
        expect(SUT.func(time)).toBe('1000');
    });

    it('will return 1100 for two minutes', () => {
        const time = '00:02:00'
        expect(SUT.func(time)).toBe('1100');
    });

    it('will return 1110 for three minutes', () => {
        const time = '00:03:00'
        expect(SUT.func(time)).toBe('1110');
    });
    
    it('will return 1111 for four minutes', () => {
        const time = '00:04:00'
        expect(SUT.func(time)).toBe('1111');
    });
    
    it('will return 0000 for five minutes', () => {
        const time = '00:05:00'
        expect(SUT.func(time)).toBe('0000');
    });

});

describe('minutes', () => {

    it('will return 0 for 0 minutes', () => {
        const time = '00:00:00'
        expect(SUT.minutes(time)).toBe(0);
    });

    it('will return 1 for 1 minutes', () => {
        const time = '00:01:00'
        expect(SUT.minutes(time)).toBe(1);
    });

    it('will return 2 for 2 minutes', () => {
        const time = '00:02:00'
        expect(SUT.minutes(time)).toBe(2);
    });

    it('will return 33 for 33 minutes', () => {
        const time = '00:33:00'
        expect(SUT.minutes(time)).toBe(33);
    });

});