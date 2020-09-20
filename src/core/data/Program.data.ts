import {Program} from "../models/Program.model";


export const program: Program[] = [
    {
        location: 'Teknologihuset - Oslo',
        slido: "https://app.sli.do/event/4ojqxtzb?section=e31c0e50-0745-4182-895f-cb43f7f425af",
        liveEmbeddedUrl: "https://vimeo.com/event/282808/embed",
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    id: "1",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: [{
                        name: 'Ron Pressler',
                        bio: 'Ron works at Oracle, in the Java Platform Group, and is the technical lead for OpenJDK\'s Project Loom, which seeks to add lightweight threads to the JDK.\n'
                    }],
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.',
                    video: 'https://player.vimeo.com/video/459093305'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "2",
                    title: 'Creating a Delivery Platform; the pain and profit',
                    speakers: [{
                        name:'Anders Brujordet',
                        bio: 'Lead DevOps Engineer at Piano.\n' +
                            'Graduated from NTNU in 2010 with a masters degree in Computer Science and have been working somewhere between backend and operations since then. Favorite languages are Bash and Scala and lately security and penetration testing has been an exciting hobby.',
                    }],
                    abstract: 'In Schibsted I helped build a Delivery Platform for 1500 developers. Now I’m building one for 20 developers at Piano. The challenges are not as different as you might think, and I’d like to share my key takeaways and tips for doing this well.',
                    video: 'https://player.vimeo.com/video/459273615'
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
                        speakers: [{
                            name: 'Vidar Moe',
                            bio: 'Liker å lage god og enkel programvare gjennom kontinuerlig læring og respekt for mennesker.\n' +
                                'Brenner for lean og smidige prinsipper. Er glad i å utfordre både teknikk og organisasjon for å kunne levere stadig bedre stadig raskere.'
                        },
                            {
                                name: 'Ola Hast',
                                bio: 'Har troen på at det bør være enkelt å gjøre det riktig og at da blir jobben mer gøy.\n' +
                                    'Ja til lettvektsrammeverk og SWARMing.'
                            }
                        ],
                        abstract: 'Vi hadde stålkontroll på både sikkerhetsløsningene og rammeverkene våre. Teknologien og programmeringsmodellene var krystallklare, dokumentasjonen og prosessene grundige og utfyllende.Det var bare et problem. Hele plattformen råtnet på rot. Hvordan skulle vi klare å beholde kontrollen når vi skulle bygge plattformen på nytt og samtidig  sørge for at vi bygget for stadig raskere endringer på alle deler av plattformen? Kom og hør hvordan noen få byggescript vi lagde i 2013, har hjulpet oss på reisen fra tre til over 20 team og utviklet seg til å bli en av bærebjelkene for kontinuerlig teknologiutvikling og forbedring i SpareBank 1.',
                        video: 'https://player.vimeo.com/video/459291737'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        id: "5",
                        title: 'Why Are PASETOs Better Than JSON Web Tokens? A Quick See on PASETO',
                        speakers: [{
                            name: 'Ruby Jane Cabagnot',
                            bio: 'A serendipitous Filipina software developer with a wanderlust heart but currently living in Norway. She believes that one can still teach old dogs new tricks, even coding. ',
                        }],
                        abstract: 'JSON Web Tokens (JWTs) have become ubiquitous in the web authentication landscape over the last four years. In this talk, I’ll introduce you to their successor: PASETO tokens (platform agnostic security tokens). PASETO takes the best parts of the JWT spec and removes the rest. PASETO is a much simpler, more secure, and easier to use version of the JWT spec that makes cryptographers happy reduces risk for developers like you.',
                        video: 'https://player.vimeo.com/video/459309236'
                    },
                    {
                        id: "6",
                        title: 'DIY security and privacy: roll your own VPN in 10 minutes',
                        speakers: [{
                            name: 'Jonas Nordstrand',
                            bio: 'Dev at SpareBank 1 Utveckling. Generalist with ever-changing and varied interest. Current special interest: iOS-development.',
                        }],
                        abstract: 'It’s more important than ever to use a personal VPN - both for personal internet privacy and for safely accessing your smart-home/IoT-stuff when your’re away from home. There’s no shortage of commercial VPN offerings vying for your business - but no option is as satisfying (or secure) as rolling your own setup! In this session I’ll demonstrate how you can roll a personal VPN in just 10 minutes with Wireguard - the simple, understandable and elegant VPN system that was recently merged into the Linux kernel source code tree.',
                        video: 'https://player.vimeo.com/video/459310996'
                    },
                    {
                        id: "7",
                        title: 'Det handler om å ta vare på folks data',
                        speakers: [{
                            name: 'Hans Ove Ringstad',
                            bio: 'Hans Ove jobber i Kantega, har bakgrunn som utvikler, og har siden 2014 bl.a hatt ansvar for folks persondata.',
                        }],
                        abstract: 'Tenk deg at du plutselig blir med i et team som jobber med reelle persondata. Som en del av dette teamet så får du også tilgang til disse dataene. Du har selvfølgelig hørt om GDPR, og vet at disse dataene ikke må komme på avveie, men hvilket ansvar har du egentlig? Hva kan du gjøre for å hjelpe resten av teamet slik at dere ikke roter til dette viktige ansvaret?\n' +
                            '\n' +
                            'Dette er ikke en presentasjon om GDPR. Den baserer seg på egne og andres praktiske erfaringer om hvordan sikre persondata i hverdagen. Den vil vise eksempler på utfordringer og hva som kan gå galt. Vi ser på hva avvik er, hva ditt ansvar er, og noen tips og råd.',
                        video: 'https://player.vimeo.com/video/459084572'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        id: "8",
                        title: 'What Does Your Phone Really Do?',
                        speakers: [{
                            name: 'Steven Parker',
                            bio: 'Steven Parker has worked on a huge array of products during 14 years at Apple, a decade at Sun Microsystems, and a variety of other companies spanning 35 years.  He has worked at all levels of the stack: assembly code and operating systems, servers, networks, infrastructure, and operating environments based on dozens of languages. Steven has a passion for architecture and performance.'
                        }],
                        abstract: 'Cellphones have gone from something like out of Star Trek, to much more than we ever imagined.  Some of the things will surprise you.  Ranging from the characteristics of cellular radios, power management and battery life, to the chip designs of the System-On-A-Chip (SoC) that make cellphones possible, we will consider key aspects of their evolution.  We’ll conclude with some thoughts about how your software and service design can keep leverage that knowledge to provide a better user-experience.',
                        video: 'https://player.vimeo.com/video/459325305'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        id: "9",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: [{
                            name: 'Trisha Gee',
                            bio: 'Trisha has developed Java applications for a range of industries, including finance, manufacturing, software and non-profit, for companies of all sizes.  She has expertise in Java high performance systems, is passionate about enabling developer productivity, and dabbles with Open Source development. Trisha is a leader of the Sevilla Java User Group and a Java Champion, she believes healthy communities and sharing ideas help us to learn from mistakes and build on successes. As a Developer Advocate for JetBrains, she gets to share all the interesting things she’s constantly discovering.'
                        }],
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.',
                            video: 'https://player.vimeo.com/video/459336431'
                    }
                ]
            },
        ]
    },
    {
        location: 'NAV - Oslo',
        liveEmbeddedUrl: "https://vimeo.com/event/281205/embed",
        slido: "https://app.sli.do/event/4ojqxtzb?section=3f54e107-8929-424a-a50a-256dc8bcbd7a",
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    id: "10",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: [{
                        name: 'Ron Pressler',
                        bio: 'Ron works at Oracle, in the Java Platform Group, and is the technical lead for OpenJDK\'s Project Loom, which seeks to add lightweight threads to the JDK.'
                    }],
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.',
                    video: 'https://player.vimeo.com/video/459093305'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "11",
                    title: 'Sikkerhetsfolk og jurister er mer Rive-Rolf enn Byggmester Bob - Må det være sånn?',
                    speakers: [{
                        name: 'Rune Schumann',
                        bio: 'Rune Schumann er sikkerhetssjef i Origo Digi, Oslo kommune og har lang erfaring som rådgiver, virksomhetsarkitekt, løsningsarkitekt og systemutvikler både i konsulentbransjen og innen produktutvikling.\n' +
                            'Den faglige interessen de siste 10 årene har dreid seg mer over mot informasjonssikkerhet og personvern, men med et holistisk syn sikkerhet i virksomheter. Det er samspillet mellom teknologi, mennesker og organisasjon som Rune er opptatt av slik at forutsetningen for god informasjonssikkerhet og et godt personvern kan være tilstede.'
                    }, {
                        name:'Mia Johnsen',
                        bio: 'Mia er en gladjurist, og ansatt som juridisk brefører og PT. Hun har erfaring fra digitaliseringsprosjekter og smidig tjenesteutvikling i offentlig sektor, og motiveres av å tråkke opp nye løyper i terrenget der moderne programvareutvikling møter krav til byråkrati, instrukser, lov og forskrifter. \n' +
                            'Hun brenner for å lage gode og brukervennlige innbyggertjenester, og er særlig opptatt av å ivareta personvern og informasjonssikkerhet – som er viktige forutsetninger for å lykkes med digitaliseringen.'

                    }],
                    abstract: 'I kampen om å lage bedre innbyggertjenester er ofte sikkerhetsfolk og jurister de største bremseklossene. Hvorfor er det slik? Noe av forklaringen er nok at vi sikkerhetsfolk og jurister er selvgode og maktkåte, men mer sentralt er manglende forståelse for hvordan software utvikles kombinert med liten kjennskap til moderne metoder brukt av utviklingsteamene. For smidige DevOps-team med raske leveranser gjelder det å ikke la oss sikkerhetsfolk og jurister slippe unna i tidlig produktutviklingsfase. Hvis ikke ender det med at Rive-Rolf tramper inn og krever at løsningen stanses og rives ned, før den i det hele tatt har rukket å se dagens lys. Og må det være slik? Nei, vi i Oslo kommune har løsningen! Kom og hør Oslo kommunes oppskrift på å bake personvern og informasjonssikkerhet inn i DNAet til softwarefolka, hvor noen av ingrediensene er: autonome tverrfaglige team, vite å etterspørre det du trenger når du trenger det, evne til å etterspørre relevant kompetanse, rive ned vegger mellom fag og yrkesgrupper. Rive-Rolf ble tatt inn i varmen til slutt. Vi jobber mot at vi sikkerhetsfolk og jurister blir fullverdige medlemmer av produktutviklingsteamene med mottoet “Klart vi kan!”.',
                    video: 'https://player.vimeo.com/video/459383693'
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
                        speakers: [{
                            name:'Joakim Lehn',
                            bio: 'Joakim is a technical team lead and department manager with the consultancy firm Aboveit, currently digging deep into PSD2 and Open Banking for the biggest bank in Norway. He is passionate about cloud development, DevOps and building an awesome team culture with his colleagues.'
                        }],
                        abstract: 'For two years I had the challenge of leading a six pizza team consisting of up to 15 developers, using an agile mindset and methodology. In this presentation I will tell the story of how the team evolved and experimented with different agile methods, trying to use the team size as a benefit instead of a disadvantage.',
                        video: 'https://player.vimeo.com/video/459643623'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        id: "14",
                        title: '3 tips til utviklere for raskere testing',
                        speakers: [{
                            name: 'Tina Syversen',
                            bio: 'Tina jobber til daglig med test i Sopra Steria. Hun har jobbet på prosjekter på både kunde- og leverandørsiden. Rollene til Tina i et prosjekt er alt fra å være en tester, testleder og funksjonelt ansvarlig, tillegg til å stille gladelig som kaketester når det trengs. '
                        }],
                        abstract: 'I dagens raske leveranseløp er det viktig å få saker fra utvikling til produksjon raskest mulig. Tiden det tar å gjennomføre en funksjonell test vil forsinke saken, og er i mange tilfeller ikke nødvendig. Det betyr ikke at det ikke er behov for testere, men vi kan hjelpe utviklerne under utvikling, i stedet for å vente på at saken skal bli klar til test. Dette kan bidra til at vi unngår feil og får saken raskere ut i produksjon.  I denne praten vil jeg komme med tre tips til utviklere for å oppnå raskere testing.',
                        video: 'https://player.vimeo.com/video/459648608'
                    },
                    {
                        id: "15",
                        title: 'Conway\'s mob',
                        speakers: [{
                            name: 'Einar W. Høst',
                            bio: 'Einar W. Høst is a software developer at NRK, the Norwegian public broadcaster. He enjoys domain modelling, API design and computer programming. In his spare time he dabbles in impractical coding projects aimed at having fun with the djinns of the computer. He has a PhD in Computer Science from the University of Oslo and used to be a software craftsman.'
                        }],
                        abstract: 'Conway\'s Law is the observation that organizational structures tend to be replicated in systems. This creates a strong bi-directional bond between organization structure and system structure that inhibits changes to either. This can make cross-structural efforts difficult: they face potentially formidable inertia, having to overcome reinforced, overlapping, dual-natured boundaries - both social and technological. What organizational juggernaut can hope to succeed against such resistance? At NRK TV, we have started using mobs for this. The software development mobs we unleash are activity-driven, autonomous entities that absorb the social agents (people!) they need to successfully cross boundaries. What do the mobs leave in their wake? Our experiences so far suggest mostly an incredibly varied collection of solutions to difficult problems in a surprisingly short span of time. But wait, there\'s more! Something deeper and subtler is at work at the same time, hiding in the negative space we tend to label friction and inefficiency.',
                        video: 'https://player.vimeo.com/video/459650200'
                    },
                    {
                        id: "16",
                        title: 'Webdev by Day, Gamedev by night',
                        speakers: [{
                            name:'Gunnar Kriik',
                            bio: 'Full-stack developer @ SpareBank 1 Utvikling, with a focus on front-end architecture'
                        }],
                        abstract: 'Are you a web developer thinking about trying out game development or real-time rendering? This talk will cover the current state of technologies in game development, along with some interesting algorithms, data-structures and math. How having side-projects in games or real-time rendering can make you an overall better programmer, and hopefully inspire others to try out the same.',
                        video: 'https://player.vimeo.com/video/459675586'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        id: "17",
                        title: 'Create great UX and desirable products with high-productivity platform',
                        speakers: [{
                            name: 'Kristoffer Holm',
                            bio: 'Kristoffer has first-hand experience from his role as UX designer in projects introducing and improving ServiceNow platforms in different organizations. He has been working with Sopra Steria as interaction an UX designer for three yeas.'
                        }],
                        abstract: 'High-productivity platforms, like ServiceNow, can create lots of functionality in a short time. However, the focus on functionality and speed may cause unintended bad user experience. How do you achieve the benefits of high-productivity platforms while still make a good and desirable product? Kristoffer has first-hand experience from his role as UX designer in projects introducing and improving ServiceNow platforms in different organizations. In this talk, he shares some of the different challenges and opportunities that projects based on high productivity platforms face compared to traditional development projects. The talk also highlights challenges and success factors caused by history, culture, organization and user participation. If you are a project manager, functional architect, designer or working with a high productivity platform and feel you are struggling to create great user experience and desirable products Kristoffer will show you the way.',
                        video: 'https://player.vimeo.com/video/459678634'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        id: "18",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: [{
                            name: 'Trisha Gee',
                            bio: 'Trisha has developed Java applications for a range of industries, including finance, manufacturing, software and non-profit, for companies of all sizes.  She has expertise in Java high performance systems, is passionate about enabling developer productivity, and dabbles with Open Source development. Trisha is a leader of the Sevilla Java User Group and a Java Champion, she believes healthy communities and sharing ideas help us to learn from mistakes and build on successes. As a Developer Advocate for JetBrains, she gets to share all the interesting things she’s constantly discovering.'
                        }],
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.',
                        video: 'https://player.vimeo.com/video/459336431'                            
                    }
                ]
            },
        ]
    },
    {
        location: 'Virtual',
        liveEmbeddedUrl: "https://vimeo.com/event/282798/embed",
        slido: "https://app.sli.do/event/4ojqxtzb?section=72c5dfdd-7c56-4a97-b594-5e929e64b539",
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    id: "19",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: [{
                        name:'Ron Pressler',
                        bio: 'Ron works at Oracle, in the Java Platform Group, and is the technical lead for OpenJDK\'s Project Loom, which seeks to add lightweight threads to the JDK.'
                    }],
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.',
                    video: 'https://player.vimeo.com/video/459093305'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [
                    {
                        id: "20",
                        title: 'All You Wanted to Know About Contributing to OpenSource',
                        speakers: [{
                            name: 'Andres Almiray',
                            bio: 'Andres is a Java/Groovy developer and a Java Champion with more than 20 years of experience in software design and development. He has been involved in web and desktop application development since the early days of Java. Andres is a true believer in open source and has participated on popular projects like Groovy, Griffon, and DbUnit, as well as starting his own projects (Json-lib, EZMorph, GraphicsBuilder, JideBuilder). Founding member of the Griffon framework and Hackergarten community event.'
                        }],
                        abstract: 'OpenSource has changed how we develop software. Once seen as a rebellious activity it\'s now embraced by organizations with great success. A great way to level up your programming skills it to code more. Another way is to read others’ code. OpenSource fosters collaboration and communication, allowing you to expand your reach to a wide variety of code styles, viewpoints, use cases, and tools. In this session we\'ll cover several aspects of OpenSource, from getting involved, setting up a toolchain, starting a community, maintenance and governance, and more.',
                        video: 'https://player.vimeo.com/video/459682601'
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
                        speakers: [{
                            name: 'Patrycja Wegrzynowicz',
                            bio: 'Patrycja Wegrzynowicz is a software visionary and expert specialized in automated software engineering, security, and Java technologies. She is the founder and CTO of Yon Labs, a start-up focused on automated detection and refactoring of software defects, including security vulnerabilities, performance and concurrency anti-patterns, and database issues.\n' +
                                'Patrycja is a regular speaker at major academic as well as industrial conferences, including JavaOne, Devoxx, JavaZone, OOPSLA, ASE, and others. She was named as one of Top 10 Women in Tech in Poland 2016 by Girls in Tech.\n' +
                                'Patrycja’s interests focus on patterns and anti-patterns in software along with automated software engineering, particularly static and dynamic analysis techniques to support program verification, comprehension, and optimization.'
                        }],
                        abstract: 'JSON Web Token (JWT) is an open standard for creating tokens that assert some number of claims like a logged in user and his/her roles. JWT is widely used in modern applications as a stateless authentication mechanism. Therefore, it is important to understand JWT security risks, especially when broken authentication is among the most prominent security vulnerabilities according to the OWASP Top 10 list. This talk guides you through various security risks of JWT, including confidentiality problems, vulnerabilities in algorithms and libraries, token cracking, token sidejacking, and more. In live demos, you’ll learn how to hijack a user account exploiting common security vulnerabilities on the client-side, on the server-side, and in transport. You’ll also find out about common mistakes and vulnerabilities along with the best practices related to the implementation of JWT authentication and the usage of available JWT libraries.',
                        video: 'https://player.vimeo.com/video/459687243'
                    }
                ]
            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        id: "23",
                        title: 'Game of Streams: How to Tame & Get the Most from your Messaging Platforms 🐉',
                        speakers: [{
                            name:'Mark Heckler',
                            bio: 'Mark Heckler is a software developer & Spring Developer Advocate at VMware, conference speaker, published author, & Java Champion focusing upon developing innovative production-ready software at velocity for the cloud. He has worked with key players in the manufacturing, retail, medical, scientific, telecom, and financial industries and various public sector organizations to develop and deliver critical capabilities on time and on budget. Mark is an open source contributor and author/curator of a developer-focused blog (https://www.thehecklers.com) and an occasionally interesting '
                        }],
                        abstract: 'Most mission-critical systems have distributed elements or are entirely distributed, resulting in a number of challenges: performance, scalability, reliability, resilience...the eight fallacies of distributed computing are alive and well! Messaging platforms are often used to solve these problems and increase the "ilities", but they don\'t come without a few complexities of their own. Come to this session to learn not only how to use open source solutions like Spring Cloud Stream, RabbitMQ, & Apache Kafka to maximize your distributed systems\' capabilities while minimizing complexity...but also how to *really* use them! There be dragons when dealing with messaging platforms; the presenter will show you several ways to tame and harness them for maximum fire, maximum altitude.  All examples will be coded *live & in real-time*!',
                        video: 'https://player.vimeo.com/video/459692031'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        id: "24",
                        title: 'Events, Dear Boy, Events',
                        speakers: [{
                            name: 'Tim Berglund',
                            bio: 'Tim is a teacher, author, and technology leader with Confluent, where he serves as the Senior Director of Developer Advocacy. He can frequently be found at speaking at conferences in the United States and all over the world. He is the co-presenter of various training videos on topics ranging from Git to Distributed Systems to Apache Kafka. He tweets as @tlberglund, blogs very occasionally at http://timberglund.com, and lives in Littleton, CO, USA with the wife of his youth, their three children having grown up.'
                        }],
                        abstract: 'Harold McMillan was Prime Minister of England from 1957 to 1963, the last British PM born during Queen Victoria’s rule, and one whose wit and even-keeled nature defined his administration. When asked by a reporter what might force his government off the course he had firmly laid out for it, he allegedly replied “Events, dear boy, events.” The same might be said about what is driving software architectures today. Event-driven systems have enabled organizations to build substantial microservices ecosystems with all of the decoupling and evolvability that we were promised by the distributed computing technologies of 20 years ago. But these systems raise some interesting questions: if events now rule, what has become of entities? If we store events in logs, do we still need databases? Can we merely produce immutable events to trivially scalable logs and loose our microservices to consume them with no regard for what is actually out there in the world? To make sense of this, we turn to the past. Spanning 2,500 years before McMillan deployed his wit on that poor reporter, we will look at what Heraclitus, Aristotle, Karl Popper, and W.V.O. Quine thought and wrote about these same questions. Are there things in the world that maintain their identity over time, or is the world just a sequence of experiences? Life may be a stream of events, but sometimes I still want to look things up by key. Four great thinkers will help be better at following the paradigm that will be shaping our systems for the next generation. And as usual, a good philosophy lesson will make us better at practical tasks. We’ll apply a rich view of events and entities to a proposed microservices architecture that can last the next decade.',
                        video: 'https://player.vimeo.com/video/459869829'
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        id: "25",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: [{
                            name:'Trisha Gee',
                            bio: 'Trisha has developed Java applications for a range of industries, including finance, manufacturing, software and non-profit, for companies of all sizes.  She has expertise in Java high performance systems, is passionate about enabling developer productivity, and dabbles with Open Source development. Trisha is a leader of the Sevilla Java User Group and a Java Champion, she believes healthy communities and sharing ideas help us to learn from mistakes and build on successes. As a Developer Advocate for JetBrains, she gets to share all the interesting things she’s constantly discovering.'
                        }],
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.',
                        video: 'https://player.vimeo.com/video/459336431'
                    }
                ]
            },
        ]
    },
    {
        location: 'Kantega - Trondheim',
        liveEmbeddedUrl: "https://vimeo.com/event/281202/embed",
        slido: "https://app.sli.do/event/4ojqxtzb?section=17cd73ad-e1f4-4010-b9a2-77c963a7aff9",
        schedule: [
            {
                time: '9.30 – 10.30',
                talks: [{
                    id: "26",
                    title: 'Keynote: Scalable, Harmonious Concurrency for the Java Platform',
                    speakers: [{
                        name:'Ron Pressler',
                        bio: 'Ron works at Oracle, in the Java Platform Group, and is the technical lead for OpenJDK\'s Project Loom, which seeks to add lightweight threads to the JDK.'
                    }],
                    abstract: 'Concurrent applications, those serving multiple independent application actions simultaneously, are the bread and butter of Java server-side programming. The thread has been Java’s primary unit of concurrency since Java’s inception, and is a core construct around which the entire Java platform is designed, but its cost is such that it can no longer efficiently represent a domain unit of concurrency, such as the session, request or transaction. As a result, Java has seen a proliferation of libraries and frameworks that offer scalability at the cost of abandoning the thread as the unit of software concurrency and, with it, the straightforward support of Java’s observability tooling, such as debuggers and profilers. Project Loom aims to reinstate the thread as an efficient unit of concurrency by adding a lightweight implementation of threads to the Java platform, which would allow straightforward code — that’s easy to write, understand and maintain, and works in harmony with the platform and its tooling — to scale and meet the requirements of even most demanding concurrent applications.',
                    video: 'https://player.vimeo.com/video/459093305'
                }]
            },
            {
                time: '10.40 – 11.40',
                talks: [{
                    id: "27",
                    title: 'Overvåke gata eller finne korrupsjon? Norges data er ferdig indeksert',
                    speakers: [{
                        name:'Hallvard Nygård',
                        bio: 'Koder og arkitekt som på fritida driver Norske-postlister.no og søker mye innsyn hos offentlige myndigheter.'
                    }],
                    abstract: 'Om du vil bli varslet om nye offentlige dokumenter om gata di eller grave etter hva myndighetene våre driver med, så er hobbytjenesten til Hallvard noe for deg. Med over 65 millioner datapunkter har Hallvard scrapet store deler av Norges offentlige nettportaler. Fra krangling med Digdir (Difi) om lovlighet av skraping til funn av sikkerhetshull tar han i dette foredraget oss med på en reise inn i datascraping i stor skala i hobbyprosjektet Norske-postlister.no. Hobbyprosjektet samler og publiserer "journalposter" fra offentlige myndigheter i åpen portal på nettet. I denne får både innbyggere og journalister grave i saker som kommuner og andre myndigheter har journalført. Alt for at vi skal få innsikt i hva myndighetene foretar seg. En viktig del av våre demokratiske prosess.Foredraget vil også gå inn på lovlighet ved scraping. Statens Vegvesen anmeldte en utvikler som lastet ned en database de hadde på nett. Bytting av parameter i URL er samme teknikk som Norske-postlister.no bruker opp mot flere hundre myndigheter, over 100 000 ganger i døgnet. Er det hele ulovlig? Vi skal også få høre om personvern i sammenheng med publisering av dataene. Automatisk sladding av navn, fødselsnummer, med mer. Hva er utfordringene? Hva kan løses? Hva er risikoen? Stikkord: Scraping av Norge, Stort datasett, vasking av data, lovlighet ved scraping, personvern ved publisering, borgerjournalistikk, offentlige data, journalposter i postlister, Offentleglova (Innsyn til alle!), datajournalistikk, borgerjournalistikk.',
                    video: 'https://player.vimeo.com/video/459871711'
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
                        speakers: [{
                            name:'Muhammad Ali Norozi',
                            bio: '',
                        }],
                        abstract: 'User behaviour analysis (UBA) is the set of methods/techniques/mindset for collecting, combining, and analysing quantitative and qualitative user data to understand how users interact with a product, and why. And from those data points there are data point which we call for anomalies. Those data points which stand out and which at times contain wealth of indications and signals, necessary for the product and business in general.\n' +
                            '\n' +
                            'In this talk I will go from general UBA to more specific anomalous cases and specifically to some cases of fraud and anti money laundering (AML). Some existing ML methods and discussions around that.',
                        video: 'https://player.vimeo.com/video/459873809'
                    }
                ]

            },
            {
                time: '13.40 – 14.40',
                talks: [
                    {
                        id: "30",
                        title: 'Fra ingen ende-til-ende tester til full oversikt',
                        speakers: [{
                            name: 'Tor Kjetil Moseng',
                            bio: ''
                        }],
                        abstract: 'For Statens Vegvesen utvikler vi en web-basert løsning som skal ta i mot og kontrollere vegdata som skal lagres i den Nasjonale Vegdatabanken (NVDB). Å teste de mange funksjonene manuelt ble etterhvert en kjedelig og langvarig prosess. Noe måtte skje. Omtrent da ble testrammeverket Cypress introdusert. Cypress kjører testene dine i en browser, tester hva brukerene faktisk ser, gir gode feilmeldinger, og ikke minst, lar seg automatisere i en byggeprosess. I tillegg til at jeg klarte å skrive enkle tester med en gang. Fint!\n' +
                            '\n' +
                            'Så fra å starte med noen enkle funksjonelle ende-til-ende tester, har antallet og dekningen blitt bedre og bedre. Testene kjører nå jevnlig på Jenkins og gir en samlet oversikt over testene på en fin html-side. I tillegg har vi tatt tak i problemet med flaky tester; det er kanskje noe man må leve med, men de er blitt færre.\n' +
                            '\n' +
                            'Jeg vil i denne lyntalen gi et lite innblikk i reisen fra ingen funksjonelle tester til en god oversikt over våre automatiserte ende-til-ende tester.\n',
                        video: 'https://player.vimeo.com/video/459874968'
                    },
                    {
                        id: "31",
                        title: 'Ubeskyttet UX',
                        speakers: [{
                            name: 'Aleksander Schipper',
                            bio: 'Jeg er en erfaren UX og Visuell designer som har stor tro på å bygge broer mellom de tekniske og visuelle fagområdene. Har skapt gode brukeropplevelser sammen med utviklere hos Statens Vegvesen, Sparebank1 og Tine bland annet. Er opptatt av god dialog og samarbeid mellom fagområdene. Er brennende opptatt av visuelle gode løsninger, som gir mening for de som skal bruke dem. '
                        }],
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
                            'Designere får høre at de er her for å få alt til å se pent ut. Ikke noe mindre, ikke noe mer.',
                            video: 'https://player.vimeo.com/video/459877429'
                    },
                    {
                        id: "32",
                        title: 'Alle team trenger forskjellig ledelse',
                        speakers: [{
                            name: 'Ingunn Moen',
                            bio: 'Jeg jobber i team, og har studert teamledelse i autonome team. Er opptatt av hva som skal til for at folk skal jobbe godt sammen, og ha det gøy på jobb.'
                        }],
                        abstract: 'Alle team har ikke samme behov for teamledelse. Noen trenger ledelse for å finne ut hva de skal gjøre. Andre kan ikke lov til å bestemme hva de skal gjøre, men kan selv styre hvordan de skal gjøre jobben. Vi sier at hvis vi rekrutterer folk som er gode på å jobbe i team, så vil det gå av seg selv. Men det vet vi at det ofte ikke gjør.\n' +
                            '\n' +
                            'Har du jobbet i et team som hele tiden må gjøre ting på nytt? Strever teamet ditt med å få ferdig oppgaver raskest mulig, eller har dere oversikt over hvilken nytte dere egentlig lager?\n' +
                            '\n' +
                            'Jeg vil si noe om hva team trenger avhengig av hvor selvstyrte de er, og du som teamleder eller teamdeltager kan hjelpe, eller hindre, teamet med å jobbe enda bedre og smartere sammen. Hint: det handler om mer enn personlighet.',
                            video: 'https://player.vimeo.com/video/459878499'
                    }
                ]
            },
            {
                time: '14.50 – 15.50',
                talks: [
                    {
                        id: "33",
                        title: 'Building Quality in Legacy Systems - The Art of Asking Questions',
                        speakers: [{
                            name: 'Mufrid Krilic',
                            bio: 'Senior Software Developer/Coach at DIPS, Norway, leading software house for healthcare domain in Norway.\n' +
                                'I have 18 years of software developer experience, in telecom and healthcare, thus being deeply involved in developing enterprise-solutions in complex domains. The major part of the last 10 years of my professional career has been devoted to leading and coaching different development teams, by cultivating knowledge sharing in the organization and increasing co-developer’s business understanding. Currently I am involved as a developer and coach of a new team responsible for a mission-critical legacy system as well as trying to introduce Domain-Driven Design and build technical coaching culture on a higher, organization-wide level.\n' +
                                'Apart from work I enjoy spending time engaging my kids in STEM activities. I am an enthusiastic First Lego League mentor and have actively contributed to the FIRST community locally and internationally.'
                        }],
                        abstract: 'Mange organisasjoner har som mål å bygge kvalitet inn i utviklingsprosessen. En forutsetning for dette er å være enig om en konkret definisjon av kvalitet, noe som kan være vanskelig da kvalitet oppfattes gjerne subjektivt. Legacy systemer kommer i tillegg med iboende usikkerhet på dette området som ofte resulterer i daglige utfordringer for utviklingsteamene.\n' +
                            '\n' +
                            'Denne presentasjonen tar utgangspunkt i en multi-perspektiv definisjon av kvalitet foreslått av Gojko Adzic i sin artikkel “Redefining Software Quality”. Vi vil gå gjennom hvert perspektiv og mappe det til et sett med veldefinerte spørsmål med formål om å utfordre våre antakelser om kvalitet i sluttproduktet.\n' +
                            '\n' +
                            'Presentasjonen er basert på praktiske anvendelser av Gojko sin definisjon brukt av utviklingsteamene som jobber med legacy enterprise programvare i helse-domenet.',
                        video: 'https://player.vimeo.com/video/459879183'   
                    }
                ]
            },
            {
                time: '16.00 – 17.00',
                talks: [
                    {
                        id: "34",
                        title: 'Keynote: Career Advice for Programmers',
                        speakers: [{
                            name:'Trisha Gee',
                            bio: 'Trisha has developed Java applications for a range of industries, including finance, manufacturing, software and non-profit, for companies of all sizes.  She has expertise in Java high performance systems, is passionate about enabling developer productivity, and dabbles with Open Source development. Trisha is a leader of the Sevilla Java User Group and a Java Champion, she believes healthy communities and sharing ideas help us to learn from mistakes and build on successes. As a Developer Advocate for JetBrains, she gets to share all the interesting things she’s constantly discovering.'
                        }],
                        abstract: 'I’m no expert, but I have worked hard to steer my career, and I have been responsible for CV-screening and interviewing candidates for developer positions, and I’m involved with mentoring developers. Here, I like to share stories of things I learnt the hard way.\n' +
                            '\n' +
                            'Anyone ever give you advice on how to remain a programmer? To avoid being “promoted” into positions away from technology and code? Anyone ever tell you at school or university that you needed social skills to be a good developer? Did you know, without having had half a dozen different jobs, that all development roles are not created equal? Is it true that moving jobs a lot is a Bad Thing? In this session, Trisha is going to share some lessons she learnt the hard way while managing her career as a Java developer. She’s going to tell you secrets that others don’t want to share. And she’ll give you tools for working out what your next steps are. If nothing else, you’ll get to laugh at the (many) mistakes Trisha made in her search for The Perfect Job.',
                        video: 'https://player.vimeo.com/video/459336431'                            
                    }
                ]
            },
        ]

    }
];
