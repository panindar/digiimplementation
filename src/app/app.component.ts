import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import * as shajs from 'sha.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digi';
  clientid: string = "C12C1CA5";
  clientSecret: string = "56116ace7a8d60f585e8";
  ts: string = Date.now.toString();
  timestamps: string = Math.floor(new Date().getTime() / 1000.0).toString();
  data: string = this.clientid + this.clientSecret + this.timestamps;
  hashValue: string = shajs('sha256').update(this.data).digest('hex');
  plainText: string;






  private loadScript() {
    let chatScript = document.createElement("script");
    chatScript.setAttribute("type", "text/javascript");
    chatScript.setAttribute("src", "https://services.digitallocker.gov.in/requester/api/2/dl.js");
    chatScript.setAttribute("id", "dlshare");
    chatScript.setAttribute("data-app-id", this.clientid);
    chatScript.setAttribute("data-app-hash", this.hashValue);
    chatScript.setAttribute("time-stamp", this.timestamps);
    chatScript.setAttribute("data-callback", this.getData());
    document.body.appendChild(chatScript);
  }

  constructor() {
    console.log(this.data)
    console.log(this.timestamps)
    console.log(this.hashValue)
    var length = 10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      this.plainText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      this.plainText += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(this.plainText)
    this.loadScript();
  }

  getData() {
    return "success";
  }
}




