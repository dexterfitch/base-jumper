describe("baseChanger", function() {

  it("returns decimal equivalent of binary 2's", function() {
    expect(baseChanger("10")).to.equal(2);
  });
  it("returns decimal equivalent of binary for any number", function() {
    expect(baseChanger("11101010")).to.equal(234);
  });

});
