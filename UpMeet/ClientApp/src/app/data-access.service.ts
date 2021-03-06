import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './interfaces/events';


@Injectable({providedIn: 'root'})
export class DataAccessService {
  constructor(private http: HttpClient) { }

  apiEvents: string = '/api/Events';
  apiFavorites: string = '/api/Favorites';

  getAllEvents() {
    return this.http.get<Events>(this.apiEvents);
  }

  createEvent(eve) {
    eve.eventID = -1;
    return this.http.post(`${this.apiEvents}/add`, eve);
  }

  getEvent(id) {
    return this.http.get(`${this.apiEvents}/${id}`);
  }

  getFavorites(username) {
    return this.http.get(`${this.apiFavorites}/${username}`);
  }

  addFavorite(fave) {
    fave.id = -1;
    return this.http.post(`${this.apiFavorites}/add`, fave);
  }

  deleteFavorite(id) {
    debugger;
    return this.http.post(`${this.apiFavorites}/remove`, id);
  }

  getFavs(username) {
    return this.http.get(`${this.apiFavorites}/favs/${username}`);
  }

}
