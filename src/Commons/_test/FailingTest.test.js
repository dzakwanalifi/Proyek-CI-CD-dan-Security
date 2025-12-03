describe('Intentional Failing Test', () => {
    it('should fail to demonstrate CI failure scenario', () => {
        // This test will intentionally fail
        expect(true).toBe(false);
    });
});
