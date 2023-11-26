import {characters} from '../src/js-foundation/06-destructuring'

describe('js-foundation/06-destructuring.ts', () => {
    test('characters should containt Flash, Superman', () => {
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test('first character should be Flas sm second Superman ', () => {
        const[flash,superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman')
    });
});