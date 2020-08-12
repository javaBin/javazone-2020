import {Program} from "../models/Program.model";

export const program: Program[] = [
    {
        location: 'Teknologihuset - Oslo',
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    title: 'Keynote: Loom',
                    speakers: 'Ron Pressler'

                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    title: 'Creating a Delivery Platform; the pain and profit',
                    speakers: 'Anders Brujordet',
                    abstract: 'In Schibsted I helped build a Delivery Platform for 1500 developers. Now I’m building one for 50 developers at the Norwegian CSD (Verdipapirsentralen). The challenges are not as different as you might think, and I’d like to share my key takeaways and tips for doing this well. I’ll also expand on how we are applying these ideas at Verdipapirsentralen.'
                }]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        title: 'Det skal være lett å gjøre rett - eller hvordan lage nettbank med 20 team og samtidig sove godt om natten',
                        speakers: 'Vidar Moe, Ola Hast',
                        abstract: 'Vi hadde stålkontroll på både sikkerhetsløsningene og rammeverkene våre. Teknologien og programmeringsmodellene var krystallklare, dokumentasjonen og prosessene grundige og utfyllende.Det var bare et problem. Hele plattformen råtnet på rot. Hvordan skulle vi klare å beholde kontrollen når vi skulle bygge plattformen på nytt og samtidig  sørge for at vi bygget for stadig raskere endringer på alle deler av plattformen? Kom og hør hvordan noen få byggescript vi lagde i 2013, har hjulpet oss på reisen fra tre til over 20 team og utviklet seg til å bli en av bærebjelkene for kontinuerlig teknologiutvikling og forbedring i SpareBank 1.'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        title: 'Why Are PASETOs Better Than JSON Web Tokens? A Quick See on PASETO',
                        speakers: 'Ruby Jane Cabagnot',
                        abstract: 'JSON Web Tokens (JWTs) have become ubiquitous in the web authentication landscape over the last four years. In this talk, I’ll introduce you to their successor: PASETO tokens (platform agnostic security tokens). PASETO takes the best parts of the JWT spec and removes the rest. PASETO is a much simpler, more secure, and easier to use version of the JWT spec that makes cryptographers happy reduces risk for developers like you.'
                    },
                    {
                        title: 'DIY security and privacy: roll your own VPN in 10 minutes',
                        speakers: 'Jonas Nordstrand',
                        abstract: 'It’s more important than ever to use a personal VPN - both for personal internet privacy and for safely accessing your smart-home/IoT-stuff when your’re away from home. There’s no shortage of commercial VPN offerings vying for your business - but no option is as satisfying (or secure) as rolling your own setup! In this session I’ll demonstrate how you can roll a personal VPN in just 10 minutes with Wireguard - the simple, understandable and elegant VPN system that was recently merged into the Linux kernel source code tree.'
                    },
                    {
                        title: 'Det handler om å ta vare på folks data',
                        speakers: 'Hans Ove Ringstad',
                        abstract: 'Tenk deg at du plutselig blir med i et team som jobber med reelle persondata. Som en del av dette teamet så får du også tilgang til disse dataene. Du har selvfølgelig hørt om GDPR, og vet at disse dataene ikke må komme på avveie, men hvilket ansvar har du egentlig? Hva kan du gjøre for å hjelpe resten av teamet slik at dere ikke roter til dette viktige ansvaret? Dette er ikke en presentasjon om GDPR. Den baserer seg på egne og andres praktiske erfaringer om hvordan håndtere persondata i hverdagen. Den vil vise eksempler på utfordringer og hva som kan gå galt. Vi ser på hva du trenger å vite om avvik, og hvorfor det ikke bare dreier seg om it-sikkerhet. Så tar vi for oss hva ditt ansvar er, og til slutt noen tips og råd.'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        title: 'What Does Your Phone Really Do?',
                        speakers: 'Steven Parker',
                        abstract: 'Cellphones have gone from something like out of Star Trek, to much more than we ever imagined.  Some of the things will surprise you.  Ranging from the characteristics of cellular radios, power management and battery life, to the chip designs of the System-On-A-Chip (SoC) that make cellphones possible, we will consider key aspects of their evolution.  We’ll conclude with some thoughts about how your software and service design can keep leverage that knowledge to provide a better user-experience.'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        title: 'Keynote: Career Advice',
                        speakers: 'Trisha Gee'
                    }
                ]
            },
        ]
    },
    {
        location: 'NAV - Oslo',
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    title: 'Keynote: Loom',
                    speakers: 'Ron Pressler'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    title: 'Sikkerhetsfolk og jurister er mer Rive-Rolf enn Byggmester Bob - Må det være sånn?',
                    speakers: 'Rune Schumann, Mia Johnsen',
                    abstract: 'I kampen om å lage bedre innbyggertjenester er ofte sikkerhetsfolk og jurister de største bremseklossene. Hvorfor er det slik? Noe av forklaringen er nok at vi sikkerhetsfolk og jurister er selvgode og maktkåte, men mer sentralt er manglende forståelse for hvordan software utvikles kombinert med liten kjennskap til moderne metoder brukt av utviklingsteamene. For smidige DevOps-team med raske leveranser gjelder det å ikke la oss sikkerhetsfolk og jurister slippe unna i tidlig produktutviklingsfase. Hvis ikke ender det med at Rive-Rolf tramper inn og krever at løsningen stanses og rives ned, før den i det hele tatt har rukket å se dagens lys. Og må det være slik? Nei, vi i Oslo kommune har løsningen! Kom og hør Oslo kommunes oppskrift på å bake personvern og informasjonssikkerhet inn i DNAet til softwarefolka, hvor noen av ingrediensene er: autonome tverrfaglige team, vite å etterspørre det du trenger når du trenger det, evne til å etterspørre relevant kompetanse, rive ned vegger mellom fag og yrkesgrupper. Rive-Rolf ble tatt inn i varmen til slutt. Vi jobber mot at vi sikkerhetsfolk og jurister blir fullverdige medlemmer av produktutviklingsteamene med mottoet “Klart vi kan!”.'
                }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        title: 'A Story About an Agile Six Pizza Team',
                        speakers: 'Joakim Lehn',
                        abstract: 'For two years I had the challange of leading a six pizza team consisting of up to 15 develoåers, using an agile mindset and methodology. In this presentation I will tell the story of how the team evolved and experimented with different agile methods, trying to use the team size as a benefit instead of an disadvantage.'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        title: '3 tips til utviklere for raskere testing',
                        speakers: 'Tina Syversen',
                        abstract: 'I dagens raske leveranseløp er det viktig å få saker fra utvikling til produksjon raskest mulig. Tiden det tar å gjennomføre en funksjonell test vil forsinke saken, og er i mange tilfeller ikke nødvendig. Det betyr ikke at det ikke er behov for testere, men vi kan hjelpe utviklerne under utvikling, i stedet for å vente på at saken skal bli klar til test. Dette kan bidra til at vi unngår feil og får saken raskere ut i produksjon.  I denne praten vil jeg komme med tre tips til utviklere for å oppnå raskere testing.'
                    },
                    {
                        title: 'Conway\'s mob',
                        speakers: 'Einar W. Høst',
                        abstract: 'Conway\'s Law is the observation that organizational structures tend to be replicated in systems. This creates a strong bi-directional bond between organization structure and system structure that inhibits changes to either. This can make cross-structural efforts difficult: they face potentially formidable inertia, having to overcome reinforced, overlapping, dual-natured boundaries - both social and technological. What organizational juggernaut can hope to succeed against such resistance? At NRK TV, we have started using mobs for this. The software development mobs we unleash are activity-driven, autonomous entities that absorb the social agents (people!) they need to successfully cross boundaries. What do the mobs leave in their wake? Our experiences so far suggest mostly an incredibly varied collection of solutions to difficult problems in a surprisingly short span of time. But wait, there\'s more! Something deeper and subtler is at work at the same time, hiding in the negative space we tend to label friction and inefficiency.'
                    },
                    {
                        title: 'Webdev by Day, Gamedev by night',
                        speakers: 'Gunnar Kriik',
                        abstract: 'Are you a web developer thinking about trying out game development or real-time rendering? This talk will cover the current state of technologies in game development, along with some interesting algorithms, data-structures and math. How having side-projects in games or real-time rendering can make you an overall better programmer, and hopefully inspire others to try out the same.'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        title: 'Create great UX and desirable products with high-productivity platform',
                        speakers: 'Kristoffer Holm',
                        abstract: 'High-productivity platforms, like ServiceNow, can create lots of functionality in a short time. However, the focus on functionality and speed may cause unintended bad user experience. How do you achieve the benefits of high-productivity platforms while still make a good and desirable product? Kristoffer has first-hand experience from his role as UX designer in projects introducing and improving ServiceNow platforms in different organizations. In this talk, he shares some of the different challenges and opportunities that projects based on high productivity platforms face compared to traditional development projects. The talk also highlights challenges and success factors caused by history, culture, organization and user participation. If you are a project manager, functional architect, designer or working with a high productivity platform and feel you are struggling to create great user experience and desirable products Kristoffer will show you the way.'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        title: 'Keynote: Career Advice',
                        speakers: 'Trisha Gee'
                    }
                ]
            },
        ]
    },
    {
        location: 'Virtual',
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    title: 'Keynote: Loom',
                    speakers: 'Ron Pressler'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [
                    {
                        title: 'All You Wanted to Know About Contributing to OpenSource',
                        speakers: 'Andres Almiray',
                        abstract: 'OpenSource has changed how we develop software. Once seen as a rebellious activity it\'s now embraced by organizations with great success. A great way to level up your programming skills it to code more. Another way is to read others’ code. OpenSource fosters collaboration and communication, allowing you to expand your reach to a wide variety of code styles, viewpoints, use cases, and tools. In this session we\'ll cover several aspects of OpenSource, from getting involved, setting up a toolchain, starting a community, maintenance and governance, and more.'
                    }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        title: 'The Hacker\'s Guide to JWT Security',
                        speakers: 'Patrycja Wegrzynowicz',
                        abstract: 'JSON Web Token (JWT) is an open standard for creating tokens that assert some number of claims like a logged in user and his/her roles. JWT is widely used in modern applications as a stateless authentication mechanism. Therefore, it is important to understand JWT security risks, especially when broken authentication is among the most prominent security vulnerabilities according to the OWASP Top 10 list. This talk guides you through various security risks of JWT, including confidentiality problems, vulnerabilities in algorithms and libraries, token cracking, token sidejacking, and more. In live demos, you’ll learn how to hijack a user account exploiting common security vulnerabilities on the client-side, on the server-side, and in transport. You’ll also find out about common mistakes and vulnerabilities along with the best practices related to the implementation of JWT authentication and the usage of available JWT libraries.'
                    }
                ]
            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        title: 'Game of Streams: How to Tame & Get the Most from your Messaging Platforms 🐉',
                        speakers: 'Mark Heckler',
                        abstract: 'Most mission-critical systems have distributed elements or are entirely distributed, resulting in a number of challenges: performance, scalability, reliability, resilience...the eight fallacies of distributed computing are alive and well! Messaging platforms are often used to solve these problems and increase the "ilities", but they don\'t come without a few complexities of their own. Come to this session to learn not only how to use open source solutions like Spring Cloud Stream, RabbitMQ, & Apache Kafka to maximize your distributed systems\' capabilities while minimizing complexity...but also how to *really* use them! There be dragons when dealing with messaging platforms; the presenter will show you several ways to tame and harness them for maximum fire, maximum altitude.  All examples will be coded *live & in real-time*!'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        title: 'Events, Dear Boy, Events',
                        speakers: 'Tim Berglund',
                        abstract: 'Harold McMillan was Prime Minister of England from 1957 to 1963, the last British PM born during Queen Victoria’s rule, and one whose wit and even-keeled nature defined his administration. When asked by a reporter what might force his government off the course he had firmly laid out for it, he allegedly replied “Events, dear boy, events.” The same might be said about what is driving software architectures today. Event-driven systems have enabled organizations to build substantial microservices ecosystems with all of the decoupling and evolvability that we were promised by the distributed computing technologies of 20 years ago. But these systems raise some interesting questions: if events now rule, what has become of entities? If we store events in logs, do we still need databases? Can we merely produce immutable events to trivially scalable logs and loose our microservices to consume them with no regard for what is actually out there in the world? To make sense of this, we turn to the past. Spanning 2,500 years before McMillan deployed his wit on that poor reporter, we will look at what Heraclitus, Aristotle, Karl Popper, and W.V.O. Quine thought and wrote about these same questions. Are there things in the world that maintain their identity over time, or is the world just a sequence of experiences? Life may be a stream of events, but sometimes I still want to look things up by key. Four great thinkers will help be better at following the paradigm that will be shaping our systems for the next generation. And as usual, a good philosophy lesson will make us better at practical tasks. We’ll apply a rich view of events and entities to a proposed microservices architecture that can last the next decade.'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        title: 'Keynote: Career Advice',
                        speakers: 'Trisha Gee'
                    }
                ]
            },
        ]
    },
    {
        location: 'Kantega - Trondheim',
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    title: 'Keynote: Loom',
                    speakers: 'Ron Pressler'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    title: 'Overvåke gata eller finne korrupsjon? Norges data er ferdig indeksert',
                    speakers: 'Hallvard Nygård',
                    abstract: 'Om du vil bli varslet om nye offentlige dokumenter om gata di eller grave etter hva myndighetene våre driver med, så er hobbytjenesten til Hallvard noe for deg. Med over 65 millioner datapunkter har Hallvard scrapet store deler av Norges offentlige nettportaler. Fra krangling med Digdir (Difi) om lovlighet av skraping til funn av sikkerhetshull tar han i dette foredraget oss med på en reise inn i datascraping i stor skala i hobbyprosjektet Norske-postlister.no. Hobbyprosjektet samler og publiserer "journalposter" fra offentlige myndigheter i åpen portal på nettet. I denne får både innbyggere og journalister grave i saker som kommuner og andre myndigheter har journalført. Alt for at vi skal få innsikt i hva myndighetene foretar seg. En viktig del av våre demokratiske prosess.Foredraget vil også gå inn på lovlighet ved scraping. Statens Vegvesen anmeldte en utvikler som lastet ned en database de hadde på nett. Bytting av parameter i URL er samme teknikk som Norske-postlister.no bruker opp mot flere hundre myndigheter, over 100 000 ganger i døgnet. Er det hele ulovlig? Vi skal også få høre om personvern i sammenheng med publisering av dataene. Automatisk sladding av navn, fødselsnummer, med mer. Hva er utfordringene? Hva kan løses? Hva er risikoen? Stikkord: Scraping av Norge, Stort datasett, vasking av data, lovlighet ved scraping, personvern ved publisering, borgerjournalistikk, offentlige data, journalposter i postlister, Offentleglova (Innsyn til alle!), datajournalistikk, borgerjournalistikk.'
                }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        title: 'TBD'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        title: 'TBD'
                    },
                    {
                        title: 'TBD'
                    },
                    {
                        title: 'TBD'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        title: 'TBD'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        title: 'Keynote: Career Advice',
                        speakers: 'Trisha Gee'
                    }
                ]
            },
        ]

    }
];
