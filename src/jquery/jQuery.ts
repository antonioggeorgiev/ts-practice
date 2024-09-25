class SelectorResult {
  #elements: NodeListOf<HTMLElement>;

  constructor(selector: string) {
    this.#elements = document.querySelectorAll(selector);
  }

  html(contents: string) {
    this.#elements.forEach((elements) => (elements.innerHTML = contents));
  }

  on<K extends keyof HTMLElementEventMap>(
    eventType: K,
    listener: (event: HTMLElementEventMap[K]) => void
  ) {
    this.#elements.forEach((element) => {
      element.addEventListener(eventType, listener);
    });
  }
  show() {
    this.#elements.forEach((element) => (element.style.visibility = "visible"));
  }
  hide() {
    this.#elements.forEach((element) => (element.style.visibility = "hidden"));
  }
}

export function $(selector: string) {
  return new SelectorResult(selector);
}

export namespace $ {
  export function ajax({
    url,
    successCb,
  }: {
    url: string;
    successCb: (data: any) => void;
  }) {
    return fetch(url).then((resp) => resp.json().then(successCb));
  }
}
