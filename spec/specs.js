describe("baseChanger", function() {

  it("returns decimal equivalent of binary 2's", function() {
    expect(baseChanger("10", 2)).to.equal(2);
  });

  it("returns decimal equivalent of binary for any number", function() {
    expect(baseChanger("11101010", 2)).to.equal(234);
  });

  it("returns decimal equivalent of octal for any number", function() {
    expect(baseChanger("174", 8)).to.equal(124);
  });

  it("returns decimal equivalent of hex for any number", function() {
    expect(baseChanger("7C", 16)).to.equal(124);
  });

});
