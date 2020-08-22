import {Program} from "../models/Program.model";


export const program: Program[] = [
    {
        location: 'Teknologihuset - Oslo',
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    id: "1",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: 'Ron Pressler',
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.'

                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "2",
                    title: 'Creating a Delivery Platform; the pain and profit',
                    speakers: 'Anders Brujordet',
                    abstract: 'In Schibsted I helped build a Delivery Platform for 1500 developers. Now I’m building one for 50 developers at the Norwegian CSD (Verdipapirsentralen). The challenges are not as different as you might think, and I’d like to share my key takeaways and tips for doing this well. I’ll also expand on how we are applying these ideas at Verdipapirsentralen.'
                }]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    id: "3",
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        id: "4",
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
                        id: "5",
                        title: 'Why Are PASETOs Better Than JSON Web Tokens? A Quick See on PASETO',
                        speakers: 'Ruby Jane Cabagnot',
                        abstract: 'JSON Web Tokens (JWTs) have become ubiquitous in the web authentication landscape over the last four years. In this talk, I’ll introduce you to their successor: PASETO tokens (platform agnostic security tokens). PASETO takes the best parts of the JWT spec and removes the rest. PASETO is a much simpler, more secure, and easier to use version of the JWT spec that makes cryptographers happy reduces risk for developers like you.'
                    },
                    {
                        id: "6",
                        title: 'DIY security and privacy: roll your own VPN in 10 minutes',
                        speakers: 'Jonas Nordstrand',
                        abstract: 'It’s more important than ever to use a personal VPN - both for personal internet privacy and for safely accessing your smart-home/IoT-stuff when your’re away from home. There’s no shortage of commercial VPN offerings vying for your business - but no option is as satisfying (or secure) as rolling your own setup! In this session I’ll demonstrate how you can roll a personal VPN in just 10 minutes with Wireguard - the simple, understandable and elegant VPN system that was recently merged into the Linux kernel source code tree.'
                    },
                    {
                        id: "7",
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
                        id: "8",
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
                        id: "9",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: 'Trisha Gee',
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.'
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
                    id: "10",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: 'Ron Pressler',
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "11",
                    title: 'Sikkerhetsfolk og jurister er mer Rive-Rolf enn Byggmester Bob - Må det være sånn?',
                    speakers: 'Rune Schumann, Mia Johnsen',
                    abstract: 'I kampen om å lage bedre innbyggertjenester er ofte sikkerhetsfolk og jurister de største bremseklossene. Hvorfor er det slik? Noe av forklaringen er nok at vi sikkerhetsfolk og jurister er selvgode og maktkåte, men mer sentralt er manglende forståelse for hvordan software utvikles kombinert med liten kjennskap til moderne metoder brukt av utviklingsteamene. For smidige DevOps-team med raske leveranser gjelder det å ikke la oss sikkerhetsfolk og jurister slippe unna i tidlig produktutviklingsfase. Hvis ikke ender det med at Rive-Rolf tramper inn og krever at løsningen stanses og rives ned, før den i det hele tatt har rukket å se dagens lys. Og må det være slik? Nei, vi i Oslo kommune har løsningen! Kom og hør Oslo kommunes oppskrift på å bake personvern og informasjonssikkerhet inn i DNAet til softwarefolka, hvor noen av ingrediensene er: autonome tverrfaglige team, vite å etterspørre det du trenger når du trenger det, evne til å etterspørre relevant kompetanse, rive ned vegger mellom fag og yrkesgrupper. Rive-Rolf ble tatt inn i varmen til slutt. Vi jobber mot at vi sikkerhetsfolk og jurister blir fullverdige medlemmer av produktutviklingsteamene med mottoet “Klart vi kan!”.'
                }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    id: "12",
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        id: "13",
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
                        id: "14",
                        title: '3 tips til utviklere for raskere testing',
                        speakers: 'Tina Syversen',
                        abstract: 'I dagens raske leveranseløp er det viktig å få saker fra utvikling til produksjon raskest mulig. Tiden det tar å gjennomføre en funksjonell test vil forsinke saken, og er i mange tilfeller ikke nødvendig. Det betyr ikke at det ikke er behov for testere, men vi kan hjelpe utviklerne under utvikling, i stedet for å vente på at saken skal bli klar til test. Dette kan bidra til at vi unngår feil og får saken raskere ut i produksjon.  I denne praten vil jeg komme med tre tips til utviklere for å oppnå raskere testing.'
                    },
                    {
                        id: "15",
                        title: 'Conway\'s mob',
                        speakers: 'Einar W. Høst',
                        abstract: 'Conway\'s Law is the observation that organizational structures tend to be replicated in systems. This creates a strong bi-directional bond between organization structure and system structure that inhibits changes to either. This can make cross-structural efforts difficult: they face potentially formidable inertia, having to overcome reinforced, overlapping, dual-natured boundaries - both social and technological. What organizational juggernaut can hope to succeed against such resistance? At NRK TV, we have started using mobs for this. The software development mobs we unleash are activity-driven, autonomous entities that absorb the social agents (people!) they need to successfully cross boundaries. What do the mobs leave in their wake? Our experiences so far suggest mostly an incredibly varied collection of solutions to difficult problems in a surprisingly short span of time. But wait, there\'s more! Something deeper and subtler is at work at the same time, hiding in the negative space we tend to label friction and inefficiency.'
                    },
                    {
                        id: "16",
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
                        id: "17",
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
                        id: "18",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: 'Trisha Gee',
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.'
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
                    id: "19",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: 'Ron Pressler',
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [
                    {
                        id: "20",
                        title: 'All You Wanted to Know About Contributing to OpenSource',
                        speakers: 'Andres Almiray',
                        abstract: 'OpenSource has changed how we develop software. Once seen as a rebellious activity it\'s now embraced by organizations with great success. A great way to level up your programming skills it to code more. Another way is to read others’ code. OpenSource fosters collaboration and communication, allowing you to expand your reach to a wide variety of code styles, viewpoints, use cases, and tools. In this session we\'ll cover several aspects of OpenSource, from getting involved, setting up a toolchain, starting a community, maintenance and governance, and more.'
                    }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    id: "21",
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        id: "22",
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
                        id: "23",
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
                        id: "24",
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
                        id: "25",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: 'Trisha Gee',
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.'
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
                    id: "26",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: 'Ron Pressler',
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "27",
                    title: 'Overvåke gata eller finne korrupsjon? Norges data er ferdig indeksert',
                    speakers: 'Hallvard Nygård',
                    abstract: 'Om du vil bli varslet om nye offentlige dokumenter om gata di eller grave etter hva myndighetene våre driver med, så er hobbytjenesten til Hallvard noe for deg. Med over 65 millioner datapunkter har Hallvard scrapet store deler av Norges offentlige nettportaler. Fra krangling med Digdir (Difi) om lovlighet av skraping til funn av sikkerhetshull tar han i dette foredraget oss med på en reise inn i datascraping i stor skala i hobbyprosjektet Norske-postlister.no. Hobbyprosjektet samler og publiserer "journalposter" fra offentlige myndigheter i åpen portal på nettet. I denne får både innbyggere og journalister grave i saker som kommuner og andre myndigheter har journalført. Alt for at vi skal få innsikt i hva myndighetene foretar seg. En viktig del av våre demokratiske prosess.Foredraget vil også gå inn på lovlighet ved scraping. Statens Vegvesen anmeldte en utvikler som lastet ned en database de hadde på nett. Bytting av parameter i URL er samme teknikk som Norske-postlister.no bruker opp mot flere hundre myndigheter, over 100 000 ganger i døgnet. Er det hele ulovlig? Vi skal også få høre om personvern i sammenheng med publisering av dataene. Automatisk sladding av navn, fødselsnummer, med mer. Hva er utfordringene? Hva kan løses? Hva er risikoen? Stikkord: Scraping av Norge, Stort datasett, vasking av data, lovlighet ved scraping, personvern ved publisering, borgerjournalistikk, offentlige data, journalposter i postlister, Offentleglova (Innsyn til alle!), datajournalistikk, borgerjournalistikk.'
                }
                ]
            },
            {
                time: '11.40 - 12.30',
                talks: [{
                    id: "28",
                    title: 'Break'

                }]
            },
            {
                time: '12.30 – 13.30',
                talks: [
                    {
                        id: "29",
                        title: 'User Behaviour Analysis - Anomalous behaviour',
                        speakers: 'Muhammad Ali Norozi',
                        abstract: 'User behaviour analysis (UBA) is the set of methods/techniques/mindset for collecting, combining, and analysing quantitative and qualitative user data to understand how users interact with a product, and why. And from those data points there are data point which we call for anomalies. Those data points which stand out and which at times contain wealth of indications and signals, necessary for the product and business in general.\n' +
                            '\n' +
                            'In this talk I will go from general UBA to more specific anomalous cases and specifically to some cases of fraud and anti money laundering (AML). Some existing ML methods and discussions around that.'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        id: "30",
                        title: 'TBD'
                    },
                    {
                        id: "31",
                        title: 'Ubeskyttet UX',
                        speakers: 'Aleksander Schipper',
                        abstract: 'Vi har alle funnet oss selv i den kleine situasjonen. Er det meg det er noe galt med? Er det deg det er noe galt med? Begge parter vet ikke helt hva som skjer, men noe er feil - og det er flaut for alle. Du prøver å få gjennom noe, men får det ikke til. Jeg er ganske sikker på at jeg ikke har med meg noe ræl fra siste side jeg var på - tenker du. Og det er nok sant. Det er ikke deg, men det er den du interagerer med, dessverre. Du er ikke den første, og er hvert fall ikke den siste. Man snakker ofte om helsesjekk i forskjellige systemer, men det er spesielt en form for sykdom det ikke snakkes mye om i dag. Den er veldig utbredt, men lite kjent hos folk flest. Det er et felles ansvar å løfte sykdommen ut fra skyggene. Jeg snakker selvfølgelig om ubeskyttet UX\n' +
                            '\n' +
                            'Designere fra flere forskjellige disipliner jobber gjerne med UX, og du har kanskje hørt titler som; interaksjonsdesigner, tjenestedesigner, informasjonsarkitekt, grafisk designer, visuell designer, UI designer, Adferds-designer, Idé-astronaut, Designpsykolog osv... Noe som gjør det ekstra fancy er om det står -lead bak. Da har man liksom svart belte, og er helt rå i faget. Men noe jeg føler vi ofte glemmer er at UX er noe som treffer alle i teamet. Om du er en helt sinnsyk fullstack utvikler, eller om du har en mastergrad i forretning fra en fancy skole i utlandet - inngår UX deg også. \n' +
                            '\n' +
                            'Jeg vil gjerne dele noen erfaringer om ubeskyttet UX jeg har opplevd:\n' +
                            '\n' +
                            'Produkteier vet visst ALT som er verdt å vite om brukerne av systemet. Man blir møtt med motstand dersom man nevner ting som: Intervjuer, brukertester, medlytt på saksbehandlere... Kreative workshops oppleves som bortkastet tid. Fasiten sitter i samme rom som deg. Produkteier kan alt om brukerens problemer og behov.\n' +
                            '\n' +
                            'Teamet måles på hvor mye de lager, hvor mange JIRA tasker de fullfører og hvor fort dette går ut i produksjon. Det er jo kjekt å kunne gjøre raske endringer dersom noe er feil, men hvis suksessfaktoren i teamet er hvor mye de får ut - så er det noe som skurrer. Bare fordi man kan bygge noe, bør man egentlig bygge det? \n' +
                            '\n' +
                            'Når det først gjennomføres en brukertest, så er det liten interesse hos utviklere og forretning. Alle bør bidra! Backend, Frontend, fullstack, forretning, design - alle bør være med! Alle observerer forskjellige ting som har med systemet å gjøre. Alle bør bry seg mye om dette, og hvis alle bryr seg, får alle mer eierskap. Ikke bare det, men man avdekker enda flere muligheter for forbedring. \n' +
                            '\n' +
                            'Designere får høre at de er her for å få alt til å se pent ut. Ikke noe mindre, ikke noe mer.'
                    },
                    {
                        id: "32",
                        title: 'TBD'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        id: "33",
                        title: 'Building Quality in Legacy Systems - The Art of Asking Questions',
                        speakers: 'Mufrid Krilic',
                        abstract: 'The goal of being able to build quality in software products from the get-go is something that many organizations are trying to achieve. However, the very definition of software quality is somewhat elusive which makes it difficult to agree upon the perceived level of quality in software products. Moreover, working with legacy systems poses its own set of challenges as uncertainty of preserving overall quality in the legacy product seems to be an everyday struggle for many teams.\n' +
                            '\n' +
                            'This talk builds on a multi-perspective definition suggested by Gojko Adzic in his blogpost “Redefining Software Quality” some years ago. For each perspective a series of well-defined questions will be presented that help teams challenge their own assumptions about quality in the end-product.\n' +
                            '\n' +
                            'The talk is based on practical applications of Gojko’s definition as embraced by the teams working on a legacy enterprise software in the healthcare domain.'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        id: "34",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: 'Trisha Gee',
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.'
                    }
                ]
            },
        ]

    }
];
