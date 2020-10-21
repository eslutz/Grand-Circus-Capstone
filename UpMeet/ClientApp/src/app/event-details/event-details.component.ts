import { Component, Input } from '@angular/core';
import { EventDetails, Events } from '../interfaces/events';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
/** event-details component*/
export class EventDetailsComponent {
    /** event-details ctor */
  constructor() { }

  @Input() currentEvent: EventDetails;
}
