import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input('name') name: string;
  @Input('content') content: string;

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
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }

  ngOnDestroy() {
    console.log('onDestroy log');
  }

}
