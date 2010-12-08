describe("dom builder", function() {
  it("should be able to create a tag", function() {
    DOMBuilder.node("div").should.equal("<div></div>");
  });

  it("should produce the correct tag name", function() {
    DOMBuilder.node("html").should.equal("<html></html>");
  });

  it("should output properties given as the first argument", function() {
    DOMBuilder.node("html", { "class": "foo" }).should.equal('<html class="foo"></html>');
  });

  it("should output multiple properties given as the first argument", function() {
    DOMBuilder.node("html", { "class": "foo", id: "bar" }).should.equal('<html class="foo" id="bar"></html>');
  });

  it("should output subelements given as an array", function() {
    var html = DOMBuilder.node("ul", { "class": "foo" }, [
      DOMBuilder.node("li", { "class": "first" }),
      DOMBuilder.node("li")
    ]);

    html.should.equal('<ul class="foo"><li class="first"></li><li></li></ul>');
  });

  it("should take array arguments given in the second position", function() {
    var html = DOMBuilder.node("ul", [
      DOMBuilder.node("li", { "class": "first" }),
      DOMBuilder.node("li")
    ]);

    html.should.equal('<ul><li class="first"></li><li></li></ul>');
  });

  it("should self close tags that are self-closable", function() {
    var html = DOMBuilder.node("img", { src: "img.png" });

    html.should.equal('<img src="img.png" />');
  });
});