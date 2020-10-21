export interface Favorites {
  favorites: FavoriteDetails[]
}

export interface FavoriteDetails {
  ID: number,
  Username: string,
  EventID: number
}
