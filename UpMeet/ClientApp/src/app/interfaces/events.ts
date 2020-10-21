export interface Events {
  events: EventDetails[]
}

export interface EventDetails {
  eventID: number,
  name: string,
  description: string,
  date: string
}
