import { Component } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
/** events component*/
export class EventsComponent {
    /** events ctor */
  constructor(private dal: DataAccessService) { }

  events: Event;

  ngOnInit(): void {
    this.dal.getAllEvents().subscribe((data: Event) => this.events = data)  }
}
