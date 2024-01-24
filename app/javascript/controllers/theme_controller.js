import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.loadTheme();
  }

  toggle() {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    this.updateThemeIcons(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }

  loadTheme() {
    const storedTheme = localStorage.getItem("theme");
    const isDarkMode = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDarkMode);
    this.updateThemeIcons(isDarkMode);
  }

  updateThemeIcons(isDarkMode) {
    const darkIcon = document.getElementById("theme-toggle-dark-icon");
    const lightIcon = document.getElementById("theme-toggle-light-icon");
    if (isDarkMode) {
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    } else {
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    }
  }
}
