import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  // property/variable to hold the result
  specialEvents:any = [];
constructor(private _eventService: EventService,
  private _router: Router){}

ngOnInit(): void {
  // here call the service on page mouted
  this._eventService.getSpcialEvents()
  .subscribe(
    res => this.specialEvents = res,
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          // this redirect the user to login if there is any error trying to access the
          // the protected route
          this._router.navigate(['/login'])
        }
      }
    }
  );
};


}
