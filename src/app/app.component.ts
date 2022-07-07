import { Component } from '@angular/core';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digi';
  clientid: any = "C12C1CA5";
  clientSecret: any = "56116ace7a8d60f585e8";
  timestamps: any = (Math.floor(Date.now()/1000));
  data: any =  this.clientSecret + this.clientid + this.timestamps;
  hashValue: any = shajs('sha256').update(this.data).digest('hex');



  private loadScript() {
    let chatScript = document.createElement("script");
    chatScript.setAttribute("type", "text/javascript");
    chatScript.async = true;
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
    this.loadScript();
  }

  getData() {
    return "success";

  }
}

