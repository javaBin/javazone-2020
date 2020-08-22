export interface Speaker {
    name: string;
    bio?: string;
}

export type Speakers = Speaker[]

export interface Talk {
    title: string;
<<<<<<< HEAD
    id: string,
    speakers?: string;
=======
    speakers?: Speakers;
>>>>>>> edc7743a48d4d3895fb87d3716fca444ead90bb9
    abstract?: string;
}

export interface Schedule {
    time: string,
    talks: Talk[]
}

export interface Program {
    location: string;
    schedule: Schedule[];
}
