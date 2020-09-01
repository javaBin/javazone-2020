import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import Link from '../../components/Link/Link';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {CenterSection} from "../../components/CenterSection/CenterSection";

export function VolunteersPage() {
    return (
        <>
            <VikingBanner header="Bli frivillig på JavaZone"
                        subHeader="Information in Norwegian for potential student volunteers"/>
            <Section header={<h1>Hva er JavaZone?</h1>}>
                <p>
                    JavaZone er verdens største community-drevne Java-konferanse.
                </p>
                <p>
                    Hvert år strømmer over 3200 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 160
                    foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.
                </p>
            </Section>
            <Section header={<h1>Hvem leter vi etter?</h1>}>
                <p>
                    Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del
                    i dette selv?<br/>
                    Er du student høsten 2020?
                </p>
                <p>
                    Perfekt! Du er akkurat den vi leter etter! <br/>
                    Vi åpner for søknader våren 2020. Du kan sette deg på vår e-postliste for å få beskjed når vi åpner.                    <br/>
                </p>
                <p>
                    <Link external url="http://eepurl.com/dt67aj">Meld deg på e-postlisten!</Link>
                </p>
            </Section>
            <CenterSection header={<h1>Ofte Stilte Spørsmål (FAQ)</h1>}/>
            <Section header={<h1>Hvem kan bli frivillig på JavaZone?</h1>}>
                <p>
                    Alle studenter som behersker norsk og engelsk
                    flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du
                    hjertelig velkommen til å søke!
                </p>
            </Section>
            <Section header={<h1>Hva skal jeg gjøre som frivillig?</h1>}>
                <p>
                    Det vil være en del ulike oppgaver, og du kan
                    blant annet være salvakt, ha ansvar for info-stand eller utdeling av headsett. Nærmere
                    informasjon om oppgavene vil gis rett før JavaZone og under opplæringsmøtet i forkant av
                    konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og
                    interesser.
                </p>
            </Section>
            <Section header={<h1>Hvor mange frivillige bidrar på JavaZone?</h1>}>
                <p>
                    Hvert år deltar over 50 frivillige på JavaZone.
                    Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette
                    hindre deg i å søke, prøv da vel!
                </p>
            </Section>

            <Section header={<h1>Får jeg med meg noe faglig som frivillig?</h1>}>
                <p>
                    Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du
                    får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.
                </p>
            </Section>
            <Section header={<h1>Hva med reise hvis jeg ikke bor i Oslo?</h1>}>
                <p>
                    JavaZone dekker ikke reise eller overnatting for
                    frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi
                    reisestøtte. Spør derfor instituttet/skolen din om dette.
                </p>
            </Section>
            <Section header={<h1>Får jeg bli med på AweZone?</h1>}>
                <p>
                    Selvsagt får du det! JavaZone er ikke det samme
                    uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen
                    jobbing på kvelden – bare fest og moro =)
                </p>
            </Section>
            <Section header={<h1>Når må jeg møte opp som frivillig?</h1>}>
                <p>
                    Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag
                    8. september for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er
                    ferdig kl. 18 på torsdag 10. september. Da rigger vi ned, og deretter går vi videre for
                    mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som
                    frivillige.
                </p>
            </Section>
            <Section header={<h1>Når må jeg søke?</h1>}>
                <p>
                    Vi åpner for søknader til å bli frivillig i april/mai, og søknadsfristen er rundt månedsskiftet mai/juni.
                </p>
            </Section>
            <Section header={<h1>I don’t speak Norwegian… What about me?</h1>}>
                <p>
                    Being a volunteer at JavaZone requires you to be
                    fluent in both Norwegian and English. This is because you are one of the main
                    goto-people for 3200 guests.
                </p>
            </Section>
            <Section header={<h1>Spørsmål?</h1>}>
                <p>Hvis du skulle ha noen spørsmål som ikke er
                    besvart her, ta gjerne kontakt de frivilligansvarlige på<InlineLink
                        url="mailto:student@java.no">student@java.no</InlineLink>!
                </p>
            </Section>
            <Section header={<h1>Bli med da vel!</h1>}>
                <p>
                    <Link external url="http://eepurl.com/dt67aj">Meld deg på e-postlisten!</Link>
                </p>
            </Section>
        </>
    )
}