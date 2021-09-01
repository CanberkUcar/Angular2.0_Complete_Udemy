import { Component, OnInit } from '@angular/core';

@Component({
  // ! Other way to use selectors.
  // * selector: 'app-servers', <app-servers></app-servers>
  // * selector: '.app-servers', class = "app-servers".
  selector: '[app-servers]', // * <div app-servers>
  // ! Other ways to export html.
  // * Outline: templateUrl: './servers.component.html',
  // * Inline HTML export. Not often but usable.
  // template:
  //   '<app-server-test> </app-server-test> <app-server-test> </app-server-test>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: String = 'No server has created yet.';
  serverName: String = '';
  serverCreated: boolean = false;

  // * Normal Cotr.
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server named ' + this.serverName + ' has created.';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
