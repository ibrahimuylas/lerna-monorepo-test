import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class CustomButton extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  static get styles() {
    return css`
      button{
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <button>${this.text}</button>
    `;
  }
}
