describe("Jasmine sanity checks", function() {
    it("should report a successful test", function() {
        var a = true;
        expect(a).toBe(true);
    });

    it("should report a failing test", function() {
        var a = false;
        expect(a).toBe(true);
    });
});
