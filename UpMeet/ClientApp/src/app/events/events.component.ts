import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Events } from '../interfaces/events';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
/** events component*/
export class EventsComponent {
    /** events ctor */
  constructor(private dal: DataAccessService) { }

  @Output() callParent = new EventEmitter<string>();
  allEvents: Events;
  currentUsername: string = "";

  ngOnInit(): void {
    this.dal.getAllEvents().subscribe((data: Events) => this.allEvents = data);
  }

  login() {
    this.callParent.emit(this.currentUsername);
  }
}
