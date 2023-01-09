export default class Popover {
  constructor(element) {
    this.element = element;
  }

  action() {
    if (!this.element.classList.contains("popover-active")) {
      this.add();
    } else {
      this.remove();
    }
  }

  add() {
    const popover = document.createElement("div");
    popover.classList.add("popover", "position-top", "fade");
    popover.id = this.element.dataset.popoverId;
    popover.innerHTML = `
        <div class="arrow" style="left: 124px;"></div>
        <h3 class="popover-header">${this.element.dataset.originalTitle}</h3>
        <div class="popover-body">${this.element.dataset.content}</div>
      `;
    this.element.offsetParent.appendChild(popover);
    popover.style.left = `${this.element.offsetLeft}px`;
    popover.style.top = `${
      this.element.offsetTop - popover.offsetHeight - 10
    }px`;
    this.element.classList.add("popover-active");
  }

  remove() {
    const popoverList = this.element.offsetParent.querySelectorAll(".popover");
    popoverList.forEach((item) => {
      if (item.id === this.element.dataset.popoverId) {
        item.remove();
      }
    });
    this.element.classList.remove("popover-active");
  }
}
