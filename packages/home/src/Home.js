import { LitElement, html } from "lit-element";
import '@material/mwc-button'
import 'components/Button'

class Home extends LitElement {
    name= 'Wisdom';
    render() {
        return html`
      <mwc-button>
       From Home
      </mwc-button>
      <app-button></app-button>
    `;
    }
}

customElements.define('app-home', Home)