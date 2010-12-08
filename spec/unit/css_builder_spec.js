describe("css builder", function() {
  it("should be able to build a css property", function() {
    var property = CSSBuilder.node({
      height: "10px"
    });

    property.should.equal("height: 10px;");
  });

  it("should build any property given", function() {
    var property = CSSBuilder.node({
      width: "20px"
    });

    property.should.equal("width: 20px;");
  });

  it("should be able to output multiple properties", function() {
    var properties = CSSBuilder.node({
      height: "10px",
      width: "20px"
    });

    properties.should.equal("height: 10px; width: 20px;");
  });
});