import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // property/variable to hold the returned result
  events:any = [];

  constructor(private _eventService: EventService){}

  ngOnInit(): void {

      // call the service here on page load
      this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err),
      );
  };


}
