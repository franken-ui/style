import * as Lit from "lit";
import * as LitDecorators from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

window.Lit = Lit;
window.LitDecorators = LitDecorators;
window.LitRepeat = { repeat };
window.LitUnsafeHTML = { unsafeHTML };

export * from "./components/index.ts";
