import { emailTemplate } from "../src/js-foundation/01-template";



describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should containt a greeting', () => {
            expect(emailTemplate).toContain('Hi, ')
    });

    test('emailTemplate should contain {{name}} and {{OrderId}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{OrderId}}/)
    });
});