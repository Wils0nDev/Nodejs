import { getUuId } from "../../src/plugins/patron-adapter";

describe('plugins/patron-adapter/get-uuid.plugin.ts', () => {
    
   test('getUuId() should return a UUID', () => {
        const uuid = getUuId()
        expect(typeof uuid).toBe('string');
       expect(uuid.length).toBe(36)
   });
});