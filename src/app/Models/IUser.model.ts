import { ILocation } from './ILocation.model';

export interface IUser {
    id: string;
    name: IName;
    gender: string;
    location: ILocation;
    email: string;
    dob: IDateOfBirth;
    nat: string; // Nationality
}

interface IName {
    title: string;
    first: string;
    last: string;
}

interface IDateOfBirth {
    date: string;
    age: number;
}
