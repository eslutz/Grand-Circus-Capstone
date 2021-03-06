import { Component, Input } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Events } from '../interfaces/events';
import { FavoriteDetails, Favorites } from '../interfaces/favorites';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
/** favorites component*/
export class FavoritesComponent {
    /** favorites ctor */
  constructor(private dal: DataAccessService) {}

  favEvents: Events;
  favEventsIDs: Favorites;
  username: string = "Eric";
  @Input() currentUser: string;

  ngOnInit(): void {
    this.dal.getFavs(this.username).subscribe((data: Favorites) => this.favEventsIDs = data)
    this.dal.getFavorites(this.username).subscribe((data: Events) => this.favEvents = data);
  }

  removeFavorite(id: number) {
    this.dal.deleteFavorite(id).subscribe((data: any) => console.log(id));
  }
}
