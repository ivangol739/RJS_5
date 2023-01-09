import PopoverWidget from "../PopoverWidget";

test("widget should render", () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const widget = new PopoverWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(PopoverWidget.markup);
});
