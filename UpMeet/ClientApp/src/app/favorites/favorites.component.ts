import { Component, Input } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Events } from '../interfaces/events';

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
  username: string = "testuser2";
  @Input() currentUser: string;

  ngOnInit(): void {
    this.dal.getFavorites(this.username).subscribe((data: Events) => this.favEvents = data);
  }
}
