import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { selector: String };
  connect() {}

  toggle() {
    const sidebarEl = document.getElementById("sidebar");
    const sidebarBackdropEl = document.getElementById("sidebarBackdrop");
    sidebarEl.classList.toggle("hidden");
    sidebarBackdropEl.classList.toggle("hidden");
  }

  toggleSection(e) {
    const El = document.getElementById(e.currentTarget.dataset.expandTarget);
    El.classList.toggle("hidden");
    var arrow = e.currentTarget.querySelector(".arrow-toggle");
    arrow.classList.toggle("rotate-180");
  }
}
