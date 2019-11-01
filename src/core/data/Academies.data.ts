import { Academy } from '../models';
import { getAcademyPartners } from '../Utils';
import { AcademyProgram } from '../models/AcademyProgram.model';

export const academyPrograms: AcademyProgram[] = [
    {
        city: 'oslo',
        schedule: [
            {
                time: '11:30',
                title: 'Doors open'
            },
            {
                time: '12:00 - 12:30',
                title: 'Introduction'
            },
            {
                time: '12:30 - 13:30',
                title: 'A Brief History of Computer Art.',
                speakers: 'Anders Norås'
            },
            {
                time: '13:30 - 14:00',
                title: 'Break'
            },
            {
                time: '14:00 - 15:00',
                title: 'Hallo, hører du meg? Slutten på kleine videosamtaler takket være kode',
                speakers: 'Ingvild Indrebø'
            },
            {
                time: '15:00 - 15:30',
                title: 'Break'
            },
            {
                time: '15:30 - 16:30',
                title: 'It\'s about time',
                speakers: 'Christin Gorman'
            },
            {
                time: '16:30 - 17:00',
                title: 'Break'
            },
            {
                time: '17:00 - 18:00',
                title: 'Feltrapport fra en systemarkeolog',
                speakers: 'Hilde Nøkland'
            },
            {
                time: '18:00 - ∞',
                title: 'Party'
            }
        ]
    },
    {
        city: 'bergen',
        schedule: [
            {
                time: '11:30',
                title: 'Doors open'
            },
            {
                time: '12:00 - 12:30',
                title: 'Introduction'
            },
            {
                time: '12:30 - 13:30',
                title: 'Skikkelig garasje-IT: Hvordan lage system som kjører på P-hus',
                speakers: 'Stian Mathiassen'
            },
            {
                time: '13:30 - 14:00',
                title: 'Break'
            },
            {
                time: '14:00 - 15:00',
                title: 'A Brief History of Computer Art.',
                speakers: 'Anders Norås'
            },
            {
                time: '15:00 - 15:30',
                title: 'Break'
            },
            {
                time: '15:30 - 16:30',
                title: 'Feltrapport fra en systemarkeolog',
                speakers: 'Hilde Nøkland'
            },
            {
                time: '16:30 - 17:00',
                title: 'Break'
            },
            {
                time: '17:00 - 18:00',
                title: 'Open Source all the offentlig things! - men hvordan gjør vi det i NAV?',
                speakers: 'Audun Fauchald Strand, Truls Jørgensen'
            },
            {
                time: '18:00 - ∞',
                title: 'Party'
            }
        ]
    },
    {
        city: 'tromsø',
        schedule: [
            {
                time: '11:30',
                title: 'Doors open'
            },
            {
                time: '12:00 - 12:30',
                title: 'Introduction'
            },
            {
                time: '12:30 - 13:30',
                title: 'Open Source all the offentlig things! - men hvordan gjør vi det i NAV?',
                speakers: 'Audun Fauchald Strand, Truls Jørgensen'
            },
            {
                time: '13:30 - 14:00',
                title: 'Break'
            },
            {
                time: '14:00 - 15:00',
                title: 'Hallo, hører du meg? Slutten på kleine videosamtaler takket være kode',
                speakers: 'Ingvild Indrebø'
            },
            {
                time: '15:00 - 15:30',
                title: 'Break'
            },
            {
                time: '15:30 - 16:30',
                title: 'A Brief History of Computer Art.',
                speakers: 'Anders Norås'
            },
            {
                time: '16:30 - 17:00',
                title: 'Break'
            },
            {
                time: '17:00 - 18:00',
                title: 'Skikkelig garasje-IT: Hvordan lage system som kjører på P-hus',
                speakers: 'Stian Mathiassen'
            },
            {
                time: '18:00 - ∞',
                title: 'Party'
            }
        ]
    }
]

export const academies: Academy[] = [
    {
        name: 'Oslo',
        location: 'Teknologihuset',
        locationUrl: 'http://www.teknologihuset.no/',
        date: '12th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/1He9hzOMfKuRUVTg1',
        imageUrl: 'https://storage.googleapis.com/javazone-assets/images/academy_teknologihuset.jpg',
        partners: getAcademyPartners(['Kantega', 'Netcompany', 'Sysco', 'Tripletex', 'Vipps', 'Sportradar', '2Park', 'Systek']),
        program: academyPrograms[0]
    },
    {
        name: 'Bergen',
        location: 'Det Akademiske Kvarter',
        locationUrl: 'https://kvarteret.no/',
        date: '13th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/2PyxrN4sbEOE0jls1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Det_Akademiske_Kvarter.JPG',
        partners: getAcademyPartners(['Kantega', 'Ambita', 'Miles']),
        program: academyPrograms[1]
    },
    {
        name: 'Tromsø',
        location: 'Universitetet i Tromsø',
        locationUrl: 'https://uit.no/startsida',
        date: '14th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/NJi8tlRqGGb0Z6WD3',
        imageUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1451482793/clients/norway/northern-lights-tromso-norway_2-1_a8b03e36-f1cd-46be-939e-ebf6d70c41e2.jpg',
        partners: getAcademyPartners(['Sysco', 'Finn']),
        program: academyPrograms[2]
    }
]