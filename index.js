class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(val) {
    this.setAttribute("count", val);
  }

  static get observedAttributes() {
    return ["count"];
  }
  // lifecycle event
  attributeChangedCallback(prop, preVal, newVal) {
    if (prop === "count") {
      this.render();
      let btn = this.shadow.querySelector("#btn");
      btn.addEventListener("click", this.increase.bind(this));
    }
  }

  increase() {
    this.count++;
  }
  // lifecycle event
  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector("#btn");
    btn.addEventListener("click", this.increase.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
     <h1>Counter</h1>
     ${this.count}
     <button id='btn'>Increment</button>
    `;
  }
}

customElements.define("my-counter", MyCounter);
