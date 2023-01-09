/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Popover.js
class Popover {
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
    popover.style.top = `${this.element.offsetTop - popover.offsetHeight - 10}px`;
    this.element.classList.add("popover-active");
  }
  remove() {
    const popoverList = this.element.offsetParent.querySelectorAll(".popover");
    popoverList.forEach(item => {
      if (item.id === this.element.dataset.popoverId) {
        item.remove();
      }
    });
    this.element.classList.remove("popover-active");
  }
}
;// CONCATENATED MODULE: ./src/js/PopoverWidget.js

class PopoverWidget {
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
    this.popoverlist = Array.from(this.parentEl.querySelectorAll(PopoverWidget.popover));
    this.popoverlist.forEach(item => {
      item.addEventListener("click", e => this.onClick(e));
    });
  }
  onClick(e) {
    const el = new Popover(e.target);
    el.action();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_form = new PopoverWidget(document.querySelector(".container"));
app_form.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;