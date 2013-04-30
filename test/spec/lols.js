describe("Lols", function() {
  it("should be possible", function() {
    var eval, arguments;
    eval = 010;
    delete eval;
    arguments = {x: 1, x: eval}
    function y(a, a) {
      return a;
    }

    expect(y(null, arguments.x)).toBe(8);
  });

  it("should allow eval as a variable name", function() {
      expect(function() { eval("var eval;"); }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow arguments as a variable name", function() {
    expect(function() { eval("var arguments;"); }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow octals", function() {
    expect(function() { eval("var a = 010;"); }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow functions to be declared within blocks", function() {
    expect(function() {
      eval("if (true) { function x() {} };");
    }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow deletion of locals", function() {
    expect(function() { eval("var a = 1; delete a;"); }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow duplicate keys", function() {
    expect(function() { eval("var a = {x: 1, x: 2}"); }).not.toThrow(new SyntaxError("Parse error"));
  });
  it("should allow duplicate arguments", function() {
    expect(function() { eval("function a(x, x) {};"); }).not.toThrow(new SyntaxError("Parse error"));
  });
});
