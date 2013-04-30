
describe("Caller callee", function() {
  it("should let you find out who called you", function() {
    function y() {
      return arguments.callee.name + " <- " + arguments.callee.caller.name;
    };
    function x() {
      return y();
    }
    expect(x()).toBe("y <- x");
  });
});