var Module = require('./module_example.js');

describe("Example module", function() {
    it("should be loaded", function() {
        expect(Module).toBeDefined()
    });

    it("should be able to add", function() {
        var result = Module.AddNumber(2, 3);
        expect(result).toBe(5);
    });
});
