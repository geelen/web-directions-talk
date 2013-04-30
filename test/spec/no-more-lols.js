"use strict";

describe("No more lols", function() {
  it("should not allow eval as a variable name", function() {
      expect(function() { eval("var eval;"); }).toThrow(new SyntaxError("Parse error"));
  });
  it("should not allow arguments as a variable name", function() {
    expect(function() { eval("var arguments;"); }).toThrow(new SyntaxError("Parse error"));  
  });
  it("should not allow octals", function() {
    expect(function() { eval("var a = 010;"); }).toThrow(new SyntaxError("Parse error"));  
  });
  it("should not allow functions to be declared within blocks", function() {
    expect(function() { 
      eval("if (true) { function x() {} };"); 
    }).toThrow(new SyntaxError("Parse error"));  
  });
  it("should not allow deletion of locals", function() {
    expect(function() { eval("var a = 1; delete"); }).toThrow(new SyntaxError("Parse error"));  
  });
});
