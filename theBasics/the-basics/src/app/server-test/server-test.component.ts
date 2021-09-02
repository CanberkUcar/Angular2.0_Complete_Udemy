import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  // serverId: number = 10;
  // serverStatus: String = 'offline';

  // * Function for String Interpolation Example.
  // getServerStatus() {
  //   return this.serverStatus;
  // }

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
