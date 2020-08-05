

export interface Talk {
    title: string, speakers?: string;
}

export interface Schedule {
    time: string,
    talks: Talk[]
}

export interface Program {
    location: string;
    schedule: Schedule[];
}
