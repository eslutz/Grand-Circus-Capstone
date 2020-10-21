import { Component } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { EventDetails } from '../interfaces/events';

@Component({
    selector: 'app-new-event',
    templateUrl: './new-event.component.html',
    styleUrls: ['./new-event.component.css']
})
/** new-event component*/
export class NewEventComponent {
    /** new-event ctor */
  constructor(private dal: DataAccessService) { }

  event: EventDetails = {
    eventID: null,
    name: null,
    description: null,
    date: null
  };

  doCreate() {
    this.dal.createEvent(this.event).subscribe((data: EventDetails) => {
      this.event = { ...data };
      console.log(this.event);
    });
  }

}
