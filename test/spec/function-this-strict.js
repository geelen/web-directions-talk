
"use strict";

describe("Implicit this", function() {
  it("should not override null or absent thisValue", function() {
    function whatsThis() {
      return this;
    }
    expect(whatsThis()).toBe(undefined);
    expect(whatsThis.call(null)).toBe(null);
  });
});
