import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyEventsComponent implements OnInit, OnDestroy {

  constructor( ) { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {  }

}
