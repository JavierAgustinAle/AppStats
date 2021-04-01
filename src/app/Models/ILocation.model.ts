export interface ILocation {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: ICoordinates;
    timezone: ITimeZone;
}

interface ICoordinates {
    latitude: string;
    longitude: string;
}

interface ITimeZone {
    offset: string;
    description: string;
}