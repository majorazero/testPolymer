import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {
  static get properties() { return { mood: String }}
  static get template() {
    return html`
      <div>
        <style> .mood { color: green; } </style>
        Web Components are <span class="mood">[[mood]]</span>!
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
