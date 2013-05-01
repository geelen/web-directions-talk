/*
  // Shows that this works outside of Jasmine + PhantomJS.
  // run with node function-this-console.js

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

    console.log(thisWas);
    // prints undefined
  })();
*/
