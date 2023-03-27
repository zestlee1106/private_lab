import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "./button.scss?inline";

@customElement("test-component")
export class TestComponent extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <button
        class="base-button rounded-3xl"
        :disabled="disable"
        @click="onClick"
      >
        <span>
          test
          <slot />
        </span>
      </button>
    `;
  }
}
