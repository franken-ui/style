import * as Lit from 'lit';
import * as LitDecorators from 'lit/decorators.js';
import * as FloatingUI from '@floating-ui/dom';
import * as AnimeJS from 'animejs';
import { repeat } from 'lit/directives/repeat.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

window.Lit = Lit;
window.LitDecorators = LitDecorators;
window.LitRepeat = { repeat };
window.LitUnsafeHTML = { unsafeHTML };

window.AnimeJS = AnimeJS;

window.FloatingUI = FloatingUI;
