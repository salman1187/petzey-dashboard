import { Owner } from "./owner";
import { Pet } from "./pet";

export interface Appointment {
    owner: Owner;
    pet: Pet;
    date: string;
    time: string;
  }