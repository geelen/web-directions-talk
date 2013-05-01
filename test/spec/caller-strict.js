"use strict";

describe("Caller callee", function() {
  it("should prevent you from finding out who called you", function() {
    expect(function() {
      function y() {
        return arguments.callee.name + " <- " + arguments.callee.caller.name;
      };
      function x() {
        return y();
      }
      return x();
    }).toThrow(new TypeError("Unable to access callee of strict mode function"));
  });
});
