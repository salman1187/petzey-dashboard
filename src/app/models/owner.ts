import { Pet } from "./pet";

export interface Owner {
    name: string;
    pets: Pet[];
  }