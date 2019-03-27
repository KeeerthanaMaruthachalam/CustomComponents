customElements.define('my-custom', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "<b>I'm a devloper my-custom!</b>";
    }
   
  });
  console.log("hi");
  let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { ... }</style> <!-- look ma, scoped styles -->
  <b>I'm in shadow dom!</b>
  <slot></slot>
`;

customElements.define('my-shadow', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
  
});

const plasticButton = document.createElement("button", { is: "plastic-button" });
plasticButton.textContent = "Click me!";

const plasticButton2 = new PlasticButton();
console.log(plasticButton2.localName);  // will output "button"
console.assert(plasticButton2 instanceof PlasticButton);
console.assert(plasticButton2 instanceof HTMLButtonElement);

console.assert(!plasticButton.hasAttribute("is"));
console.log(plasticButton.outerHTML); 

const supportsCustomElementsV1 = 'customElements' in window;
console.log(supportsCustomElementsV1);