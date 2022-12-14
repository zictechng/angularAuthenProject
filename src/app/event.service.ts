import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEeventsUrl = "http://localhost:3000/api/special";


  constructor(private http: HttpClient) { }


  // get all event
getEvents(){
  return this.http.get<any>(this._eventsUrl);
}

// get all special event
getSpcialEvents(){
  return this.http.get<any>(this._specialEeventsUrl);
}

}
