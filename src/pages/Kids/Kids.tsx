import * as React from 'react';
import { VikingBanner } from "../../components/PageBanner/PageBanner";
import {Seperator} from "../../components/Seperator/Seperator";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {Section} from "../../components/Section/Section";
import {KidsSection} from "../../components/KidsProgram/KidsSection";
import {KidsProgram} from "../../components/KidsProgram/KidsProgram";
import Box from '../../components/Box/Box';

export function KidsPage() {
    return (
        <>
            <VikingBanner header="JavaZone Kids" subHeader="En smakebit på JavaZone for framtidens utviklere"/>
            <Seperator />
            <CenterSection header={<h1>Tre sesjoner: En smakebit på voksenlivet</h1>}>
                <p>
                    JavaZone inviterer alle, og spesielt deltakere på JavaZone, til å ta med seg sine barn på 
                    <br />
                    <br />
                    <strong><em>Teknologihuset – søndag 24. mars</em></strong>
                    <br />
                    <br />
                    For å gi dem en smakebit på voksenlivet.
                    <br />  
                    Vi kjører 3 parallelle sesjoner, slik at vi har noe for både de aller minste og de litt eldre barna.
                    <br />
                </p>
                <p>
                    Arrangementet er gratis for alle, men har begrenset antall plasser.
                </p>
            </CenterSection>
            <CenterSection header={<h1>Praktisk informasjon</h1>}/>
            <Section header={<h1>Tid & Sted</h1>}>
                <p>
                    Arrangementet finner sted på Teknologihuset <strong><em>søndag 24. mars</em></strong> fra klokken 12.00 til 15.00. Vi serverer enkel mat underveis. Det er viktig at du som forelder også setter av tid til å være til stede hele perioden. Vi lager en egen "foreldresone" med kaffe.
                </p>
            </Section>
            <Section header={<h1>Påmelding</h1>}>
                <p>
                    Vi har et begrenset antall plasser, derfor er det viktig at du melder dine barn på arrangementet. Påmelding er åpen fra <strong><em>fredag 1. mars - kl 12:00</em></strong>.
                </p>
                <p>                   
                    Det er også viktig om du sier ifra eller melder deg av om du blir forhindret fra å delta, da det pleier å være ventelister på alle våre kurs.
                </p>
            </Section>
            <Section header={<h1>Forberedelser</h1>}>
                <p>
                    Noen av kursene vil kreve litt forberedelse, det vil bli sendt ut egen informasjon om dette pr. mail.
                </p>
            </Section>
            <Section header={<h1>3 parallelle sesjoner</h1>}>
                <p>
                    Vi kjører 3 parallelle sesjoner. Du kan lese mer om de ulike sesjonene under, og melde dere på den dere ønsker å delta på. 
                </p>
                <p>                    
                    Har du flere barn i forskjellige aldere som ønsker å være med på ulike sesjoner, så kan du melde deg på flere sesjoner – Sørg i så fall for å melde på riktig antall barn til hver sesjon.
                </p>
                <p>
                    <strong><em>Påmeldingen åpner 1. mars kl. 12.00.</em></strong>
                </p>
            </Section>
            <Seperator />
            <KidsSection header={<h1>Sesjoner</h1>}>
                <Box>
                    <h1>Fullt!</h1>
                    <p>
                        Alle workshopene er desverre fulle. Du kan melde deg på ventelisten, og vil få bedskjed om du får plass.
                    </p>
                </Box>
                <KidsProgram/>
            </KidsSection>

            <Seperator />
            <CenterSection header={<h1>Vi sees på teknologihuset søndag 24. mars!</h1>}>
                <p>
                    Vennlig hilsen,
                    <br/>
                    javaBin
                </p>
            </CenterSection>
        </>
    )
}
