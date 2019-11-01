import { Speaker } from './Speaker.model';
import { UUID } from '../Types';

export interface Session {
    sessionId: UUID;
    conferenceId: UUID;
    title: string;
    abstract: string;
    length: number;
    speakers: Speaker[];
    level: string;
    room: string;
    intendedAudience: string;
    format: string;
    startTime: Date;
    endTime: Date;
}