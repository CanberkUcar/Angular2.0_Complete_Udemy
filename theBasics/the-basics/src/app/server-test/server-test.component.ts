// * Core Package is basic angular functionalities.
import { Component, OnInit } from '@angular/core';

@Component({
  // * Mainly HTML-tag for DOM Purposes to reuse.
  // ! Must be unique.
  selector: 'app-server-test',
  // * Referance to external file. Relative path.
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.css'],
})
export class ServerTestComponent implements OnInit {
  // * Values for String Interpolation Example.
  serverId: number = 10;
  serverStatus: String = 'offline';

  // * Function for String Interpolation Example.
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {}

  ngOnInit(): void {}
}
