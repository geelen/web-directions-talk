describe("Lols", function() {
  it("should override implicit or null thisValue", function() {
    function whatsThis() {
      return this;
    }
    expect(whatsThis()).toBe(window);
    expect(whatsThis.call(null)).toBe(window);
  });
});

(function() {
  "use strict";

  describe("Lols", function() {
    it("should not override null or absent thisValue", function() {
      function whatsThis() {
        return this;
      }
      expect(whatsThis()).toBe(undefined);
      expect(whatsThis.call(null)).toBe(null);
    });
  });
}());

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

  describe("defined in non-strict mode", function() {
    expect(thisWas).toBe(window);
  });
}());

(function() {
  var whatIsThis;
  (function() {
    "use strict";
    whatIsThis = function() {
      return this;
    };
  })();
  var thisWas = (function() {
    return whatIsThis();
  })();

  describe("defined in strict but called in non-strict", function() {
    expect(thisWas).toBe(window);
  });
}());

(function() {
  "use strict";
  var whatIsThis;
  (function() {
    whatIsThis = function() {
      return this;
    };
  })();
  var thisWas = (function() {
    return whatIsThis();
  })();

  describe("defined and called in non-strict", function() {
    expect(thisWas).toBe(undefined);
  });
}());

(function() {
  var whatIsThis;
  (function() {
    "use strict";
    whatIsThis = function() {
      return this;
    };
  })();
  var thisWas = (function() {
    "use strict";
    return whatIsThis();
  })();

  describe("var defined non-strict", function() {
    expect(thisWas).toBe(window);
  });
}());
