"use strict";

describe("With expression (non-strict)", function() {
  it("should treat with expressions as syntax errors", function() {
    expect(function() {
      eval(
        " var a = {x: 1, y: 2}; \
          var x = 3;            \
          with (a) {            \
            expect(x).toBe(1);  \
          }                     \
        ");
    }).toThrow(new SyntaxError("Parse error"));
  });
});
