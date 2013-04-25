"use strict";

describe("Global variables with strict mode", function() {
  var testObj;

  // use an object then use .toBe, rather than .toBeEqual
  beforeEach(function() {
    testObj = new Object;
  })
  // we shouldn't be leaking any globals, but clean up just to be safe
  afterEach(function() {
    delete window.a;
    delete window.b;
  });

  it("should throw instead of silently assigning to window", function() {
    expect(function() {
      a = testObj;
    }).toThrow(new ReferenceError("Strict mode forbids implicit creation of global property 'a'"));;
    expect(function() {return a;}).toThrow(new ReferenceError("Can't find variable: a"));
    expect(window.a).not.toBeDefined();
  });

  it("should not leak if var is used", function() {
    var b = testObj;
    expect(b).toBe(testObj);
    expect(window.b).not.toBeDefined();
  });

  it("should set functions' this to undefined", function() {
    var thisInsideFunctions = (function() {
      return this;
    })();
    expect(thisInsideFunctions).toBe(undefined);
  });
});
