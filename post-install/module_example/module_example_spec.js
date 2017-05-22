var Module = require('./module_example.js');

describe("Example module", function() {
  it("should be loaded", function() {
    expect(Module).toBeDefined()
  });

  it("should be able to add", function() {
    var result = Module.AddNumbers(2, 3);
    expect(result).toBe(2 + 3);
  });

  it("should not know how to subtract", function() {
    var errorThrower = function() { Module.SubtractNumbers(3, 2); };
    expect(errorThrower).toThrowError();
  });

  describe("nested test suite", function() {
    it("should have a pending test", function() {
      pending("How to create a pending test");
    });

    xit("should have another pending test", function() {
      fail("This failure is not recorded");
    });
  });
});
