describe("Eval in non-strict", function() {
  it("should stomp on my variables", function() {
    var a = 1, b = 2;
    eval("a = 'foo'; var b = 'bar', c = 'baz';");
    expect(a).toBe('foo');
    expect(b).toBe('bar');
    expect(c).toBe('baz');
  })
});
