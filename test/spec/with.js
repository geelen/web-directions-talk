
describe("With expression (non-strict)", function() {
  it("should exist, to the confusion of all", function() {
    var a = {x: 1, y: 2};
    var x = 3;
    with (a) {
      expect(a).toBe(1);
    }     
  });
});
