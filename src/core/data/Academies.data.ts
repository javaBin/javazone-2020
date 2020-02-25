import { Academy } from '../models';
import { getAcademyPartners } from '../Utils';
import { AcademyProgram } from '../models/AcademyProgram.model';

export const academyPrograms: AcademyProgram[] = [
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
                time: '12:30 - 13:20',
                title: 'Kodeknekking for spioner',
                speakers: 'Henrik Walker Moe'
            },
            {
                time: '13:20 - 13:40',
                title: 'Break'
            },
            {
                time: '13:40 - 14:30',
                title: 'Hvordan kan teknologi hjelpe politiet med å forebygge kriminalitet?',
                speakers: 'Tore Aasgaard'
            },
            {
                time: '14:30 - 15:20',
                title: 'Bli kjent med javaBin Tromsø',
                speakers: 'Sverre Moe'
            },
            {
                time: '15:20 - 15:40',
                title: 'Break'
            },
            {
                time: '15:40 - 16:30',
                title: 'Hvordan kan du bruke maskinlæring til å finne din neste bolig!',
                speakers: 'Aleksander Bai, Tom Bang'
            },
            {
                time: '16:30 - 17:00',
                title: 'Break'
            },
            {
                time: '17:00 - 18:00',
                title: 'Highscores - A Brief History of Computer Music',
                speakers: 'Anders Norås'
            },
            {
                time: '18:00 - 19:00',
                title: 'javaBin Tromsø meetup: Java and Haskell - Similarities and Differences',
                speakers: 'Dervis Mansuroglu'
            },
            {
                time: '19:00 - ∞',
                title: 'Party'
            }
        ]
    },
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
                title: 'Hvordan kan teknologi hjelpe politiet med å forebygge kriminalitet?',
                speakers: 'Tore Aasgaard'
            },
            {
                time: '13:30 - 14:00',
                title: 'Break'
            },
            {
                time: '14:00 - 15:00',
                title: 'Hvordan kan du bruke maskinlæring til å finne din neste bolig!',
                speakers: 'Aleksander Bai & Tom Bang'
            },
            {
                time: '15:00 - 15:30',
                title: 'Break'
            },
            {
                time: '15:30 - 16:30',
                title: 'Kodeknekking for spioner',
                speakers: 'Henrik Walker Moe'
            },
            {
                time: '16:30 - 17:00',
                title: 'Break'
            },
            {
                time: '17:00 - 18:00',
                title: 'Highscores - A Brief History of Computer Music',
                speakers: 'Anders Norås'
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
        name: 'Tromsø',
        location: 'Universitetet i Tromsø',
        locationUrl: 'https://uit.no/startsida',
        date: '25th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/NJi8tlRqGGb0Z6WD3',
        imageUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1451482793/clients/norway/northern-lights-tromso-norway_2-1_a8b03e36-f1cd-46be-939e-ebf6d70c41e2.jpg',
        partners: getAcademyPartners(['Nav']),
        program: academyPrograms[0]
    },
    {
        name: 'Oslo',
        location: 'Teknologihuset',
        locationUrl: 'http://www.teknologihuset.no/',
        date: '27th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/1He9hzOMfKuRUVTg1',
        imageUrl: 'https://d3o108dy577i1m.cloudfront.net/2019/images/academy_teknologihuset.jpg',
        partners: getAcademyPartners(['SSB', 'Statnett', 'Sopra', 'Nav']),
        program: academyPrograms[1]
    }
]
