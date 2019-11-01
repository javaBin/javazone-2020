import axios from 'axios';
import { Session } from '../models/Session.model';

const SLEEPING_PILL_URL = 'https://sleepingpill.javazone.no/public/allSessions/javazone_2018';

export function getSessions(): Session[] {
    let sessions: Session[] = [];
    axios.get(SLEEPING_PILL_URL)
        .then(function (response) {
            sessions = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return sessions;
}