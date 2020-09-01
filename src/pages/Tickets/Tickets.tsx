import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import {TicketPrice} from "../../components/TicketPrice/TicketPrice";
import Link from "../../components/Link/Link";
import {Figure} from "../../components/Figure/Figure";

export function TicketsPage() {
    return (
        <>
            <VikingBanner header="The Ticket Booth" subHeader="Come join us in Oslo, January 20th - 21th, 2021"/>
            <CenterSection color="green" header={<h1>JavaZone VR is a free event</h1>}>
                <TicketPrice>0</TicketPrice>
            </CenterSection>

            <Section color="green" header={<h1>It's a free event?</h1>}>
                <p>Yeah. JavaZone VR is a free event and will be streamed live for all to see.</p>

                <p>The program and streaming information will be made available on the <InlineLink color="green" url="/program">program page</InlineLink>. Watch the space for updates on how to watch them live!</p>
            </Section>

            <Section color="green" header={<h1>What about the regular event?</h1>}>
                <p>Due to the COVID-19 outbreak we have decided to postpone the regular JavaZone 2020 until January 2021. The conference will be held on January 20th and 21st (With workshops on January 19th).</p>
                <div><Link color="green" url='/corona'>More information</Link></div>
            </Section>

            <CenterSection color="green" header={<h1>Get your tickets for JavaZone 2021 – Early Bird</h1>}>
                <TicketPrice>6,590</TicketPrice>
            </CenterSection>
            <Section color="green" header={<h1>What's included?</h1>}>
                <p>
                    The JavaZone Ticket includes full access to the conference and entry to workshops on Tuesday (limited seating: first come, first served).
                </p>
                <p>
                    The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.
                    <br />
                    Prices are ex. VAt and ticket fee (NOK 120 per ticket)
                </p>
                <p>
                    After September 15th, the ticket price will be NOK 7,190.00,- (Late Bird price).
                </p>

                <p>
                    <Link color="green" url="/tickets/buy">Get your tickets now!</Link>
                </p>
            </Section>
            <ImageSection imageName="tickets_2" />
            <Section color="green" header={<h1>Working for one of our partners?</h1>}>
                <p>
                    All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at a reduced price until November 1st. Read more about <InlineLink color="green" url="/partners">JavaZone partnership</InlineLink> here.
                </p>
            </Section>
            <Section color="green" header={<h1>Need more than one ticket?</h1>}>
                <p>
                    Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email. Just use our regular webshop and specify the number of tickets you require when buying.
                </p>
            </Section>
            <Figure name="baard"/>
            <Section color="green" header={<h1>Need an invoice?</h1>}>
                <p>
                    Paying by invoice can be accommodated if required, but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even when paying with credit card.
                </p>
            </Section>
            <Section color="green" header={<h1>Refund policy</h1>}>
                <p>
                    If you need a refund on your ticket, send an email with your request to <InlineLink color="green" external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink>. We'll refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees) for requests submitted before December 1st. Refund requests received after December 1st will only be accepted if javaBin are able to resell the tickets. For tickets bought in bulk (applies to both partner tickets and large regular orders), a maximum of 5 tickets can be refunded under this policy.
                </p>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0035" />
            <Section color="green" header={<h1>The javaBin membership included in the ticket</h1>}>
                <p>
                    JavaZone is organized for and by the community. Your ticket includes a membership to javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                </p>
            </Section>
            <CenterSection color="green" header={<h1>Need more info about JavaZone?</h1>}>
                <p>
                    We'll release more information about the conference as fast as possible, and the detailed program with information about all the talks will be ready in December.
                </p>
                <p>
                    Don't wait too long buying your ticket, though – last year all of the 3,200 spots were gone, and we had long waiting lists. We expect a decent amount of interest this year as well.
                </p>
            </CenterSection>
        </>
    )
}
