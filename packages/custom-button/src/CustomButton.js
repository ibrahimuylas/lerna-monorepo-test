import { LitElement, html, css } from 'lit-element';

export class CustomButton extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  static get styles() {
    return css`
      button {
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <h1>Test 2</h1>
      <button>${this.text}</button>
    `;
  }
}
