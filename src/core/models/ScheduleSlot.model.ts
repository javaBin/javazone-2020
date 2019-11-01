import { Speaker } from "./Speaker.model";


export interface ScheduleSlot {
    title: string;
    speaker?: string;
    duration?: number;
    time: string;
}