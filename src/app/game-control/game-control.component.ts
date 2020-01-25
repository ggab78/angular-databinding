import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {all} from 'codelyzer/util/function';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastnumber = 0;
  @Input() oddNum: number[];
  @Input() evenNum: number[];

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber++;
    }, 1000);
  }

  OnPauseGame() {
    clearInterval(this.interval);
  }
}
