import { LitElement, html } from "lit-element";
import '@material/mwc-button'

class Button extends LitElement {
  static get properties() {
    return { message: { type: String } };
  }

  set message(val) {
    let oldVal = this._message;
    this._message = val;
    this.requestUpdate('message', oldVal);
  }

  get message() { return this._message; }


  constructor() {
    super();
    this._message = 'Now You see me....';
  }
    render() {
        return html`
      <mwc-button @click="${this._handleClick}">
      ${this.message}
      </mwc-button>
    `;  
    }
  
  _handleClick() {
    this.message =  `Now you don't`
  }

}

customElements.define('app-button', Button)