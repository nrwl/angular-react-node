export class HeaderElement extends HTMLElement {
  public static observedAttributes = ['title'];

  attributeChangedCallback() {
    this.innerHTML = `<h1 style="color: blue">${this.title}!</h1>`;
  }
}

customElements.define('mycompany-header', HeaderElement);
