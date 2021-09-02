// * Core Package is basic angular functionalities.
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  /* -------------- Hooks ------------- */
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  /* ---------------------------------- */
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  // ! Other way to use selectors.
  // * selector: 'app-servers', <app-servers></app-servers>
  // * selector: '.app-servers', class = "app-servers".
  selector: 'app-server-element', // * <div app-servers>
  // ! Other ways to export html.
  // * Outline: templateUrl: './server-element.component.html',
  // * Inline HTML export. Not often but usable.
  // template:
  //   '<app-server-test> </app-server-test> <app-server-test> </app-server-test>',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
  implements
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // allowNewServer: boolean = false;
  // serverCreationStatus: String = 'No server has created yet.';
  // serverName: String = '';
  // serverCreated: boolean = false;
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  // * Normal Cotr.
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = !this.allowNewServer;
  //   }, 1000);
  // }

  constructor() {
    console.log('cotr called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
