describe("Implicit this", function() {
  it("should override implicit or null thisValue", function() {
    function whatsThis() {
      return this;
    }
    expect(whatsThis()).toBe(window);
    expect(whatsThis.call(null)).toBe(window);
  });

  (function() {
    var whatIsThis;
    (function() {
      whatIsThis = function() {
        return this;
      };
    })();
    var thisWas = (function() {
      "use strict";
      return whatIsThis();
    })();

    it("should be defined in non-strict mode", function() {
      expect(thisWas).toBe(window);
    });
  })();

  // (function() {
  //   var whatIsThis;
  //   (function() {
  //     "use strict";
  //     whatIsThis = function() {
  //       return this;
  //     };
  //   })();
  //   var thisWas = (function() {
  //     return whatIsThis();
  //   })();

  //   it("should be undefined if defined in strict but called in non-strict", function() {
  //     expect(thisWas).toBe(undefined);
  //   });
  // })();
  // JASMINE must be borking something - this exact example
  // is repeated in function-this-console.js and works in node.

  (function() {
    var whatIsThis;
    (function() {
      whatIsThis = function() {
        return this;
      };
    })();
    var thisWas = (function() {
      return whatIsThis();
    })();

    it("defined and called in non-strict", function() {
      expect(thisWas).toBe(window);
    });
  })();
});
