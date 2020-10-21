export interface Favorites {
  favorites: FavoriteDetails[]
}

export interface FavoriteDetails {
  id: number,
  username: string,
  eventID: number
}
