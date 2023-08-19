import { Component } from '@angular/core';
import * as jquery from 'jquery';

declare global {
  interface Window {
    jQuery: typeof jquery;
    $: typeof jquery;
  }
}

window.jQuery = jquery;
window.$ = jquery;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_report_desiner';
  public serviceUrl: string = "";
  constructor() {
    this.serviceUrl = "https://demos.boldreports.com/services/api/ReportingAPI";
}
}
