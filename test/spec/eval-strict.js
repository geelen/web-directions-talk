"use strict";

describe("Eval in non-strict", function() {
  it("should stomp on my variables", function() {
    var a = 1, b = 2;
    eval("a = 'foo'; var b = 'bar', c = 'baz';");
    expect(a).toBe('foo');
    expect(b).toBe(2);
    expect(function() {return c;}).toThrow(new ReferenceError("Can't find variable: c"));
  })
});
