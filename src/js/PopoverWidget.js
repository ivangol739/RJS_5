import Popover from "./Popover";

export default class PopoverWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.popoverlist = null;
  }

  static get markup() {
    return `
      <div class="bd-example">
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-popover-id="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
      </div>
    `;
  }

  static get popover() {
    return "[data-toggle=popover]";
  }

  bindToDOM() {
    this.parentEl.innerHTML = PopoverWidget.markup;
    this.popoverlist = Array.from(
      this.parentEl.querySelectorAll(PopoverWidget.popover)
    );
    this.popoverlist.forEach((item) => {
      item.addEventListener("click", (e) => this.onClick(e));
    });
  }

  onClick(e) {
    const el = new Popover(e.target);
    el.action();
  }
}
