import { Component, Input } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { EventDetails, Events } from '../interfaces/events';
import { Favorites, FavoriteDetails } from '../interfaces/favorites';


@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
/** event-details component*/
export class EventDetailsComponent {
    /** event-details ctor */
  constructor(private dal: DataAccessService) { }

  @Input() currentEvent: EventDetails;
  @Input() currentUser: string;

  fav: FavoriteDetails = {
    id: null,
    username: null,
    eventID: null
  }

  addToFavorites() {
    this.fav.username = this.currentUser;
    this.fav.eventID = this.currentEvent.eventID;
    this.dal.addFavorite(this.fav).subscribe((data: FavoriteDetails) => this.fav = { ...data });
  }
}
