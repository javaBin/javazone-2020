import { UUID } from "../Types";

export interface Speaker {
    pictureId: UUID;
    name: string;
    bio: string;
    twitter: string;
    pictureUrl: string;
}