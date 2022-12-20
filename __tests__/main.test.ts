import { dailyPaid } from '../src/main';

describe('Main test', () => {
    test('dailyPaid', ()=> {
        expect(dailyPaid(3650, 0.1)).toBe(1);
    });
});
