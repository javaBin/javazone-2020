import { Partner } from "./Partner.model";
import { AcademyProgram } from "./AcademyProgram.model";

export interface Academy {
    name: string;
    location: string;
    locationUrl: string;
    date: string;
    slots: number;
    registrationUrl: string;
    imageUrl: string;
    partners: Partner[],
    program: AcademyProgram
}