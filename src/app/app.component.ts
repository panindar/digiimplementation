import { Component } from '@angular/core';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digi';
  clientid = "C12C1CA5";
  clientSecret = "56116ace7a8d60f585e8";
  timestamps = Math.floor(Date.now()/1000);
  data: any = this.clientid + this.clientSecret + this.timestamps;
  hashValue = shajs('sha256').update(this.data).digest('hex')


  constructor() {
    console.log(this.hashValue)
    console.log(this.timestamps)
  }

  getData(res: any) {
    console.log(res);
    return "success";

  }
}

