import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as jquery from 'jquery';

declare global {
  interface Window {
    jQuery: typeof jquery;
    $: typeof jquery;
  }
}

window.jQuery = jquery;
window.$ = jquery;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
