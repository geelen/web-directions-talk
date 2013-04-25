describe("Global variables without strict mode", function() {
  var testObj;

  // use an object then use .toBe, rather than .toBeEqual
  beforeEach(function() {
    testObj = new Object;
  })
  // since we're testing global variables, manually clean them all up.
  afterEach(function() {
    delete window.a;
    delete window.b;
  });

  it("should silently assign to window", function() {
    a = testObj;
    expect(a).toBe(testObj);
    expect(window.a).toBe(testObj);
  });

  it("should not leak if var is used", function() {
    var b = testObj;
    expect(b).toBe(testObj);
    expect(window.b).not.toBeDefined();
  });

  it("should silently set functions' this to window", function() {
    var thisInsideFunctions = (function() {
      return this;
    })();
    expect(thisInsideFunctions).toBe(window);
  });
});