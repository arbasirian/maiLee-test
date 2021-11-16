export default class Toggle {
  #on;
  #onHandler;
  #offHandler;

  constructor(onHandler, offHandler) {
    this.#on = false;
    this.#onHandler = onHandler;
    this.#offHandler = offHandler;
  }

  isOn() {
    return this.#on;
  }

  toggle() {
    this.#on = !this.#on;
    if (this.#on) {
      this.#onHandler();
    } else {
      this.#offHandler();
    }
  }
}
