import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @Input() content: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor log');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges log');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('DoCheck log');
  }

  ngAfterContentInit() {
    console.log('afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked');
  }

  ngOnInit() {
    console.log('onInit log');
    // header is @VieChild so available after ViewInit , here shall not be visible
    console.log('Text Content : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
    // header is @VieChild so available after ViewInit , here shall be visible
    console.log('Text Content : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }

  ngOnDestroy() {
    console.log('onDestroy log');
  }

}
