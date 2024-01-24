import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { backdropClose: { type: Boolean, default: false } };

  connect() {
    this.element.classList.add("translate-x-full");
    setTimeout(() => {
      this.element.classList.remove(
        "translate-x-full",
        "animate-fade-out",
        "hidden"
      );
      this.element.classList.add(
        "transform",
        "transition",
        "ease-in-out",
        "duration-300",
        "sm:duration-400",
        "translate-x-0"
      );
    }, 100);

    if (this.backdropCloseValue) {
      document
        .getElementById("drawer-backdrop")
        .addEventListener("click", () => {
          this.close();
        });
    }
  }

  close() {
    document
      .getElementById("drawer-backdrop")
      .classList.add("animate-fade-out", "hidden");
    this.element.classList.remove("translate-x-0");
    this.element.classList.add(
      "transform",
      "transition",
      "ease-in-out",
      "duration-300",
      "sm:duration-400",
      "translate-x-full"
    );
  }
}
