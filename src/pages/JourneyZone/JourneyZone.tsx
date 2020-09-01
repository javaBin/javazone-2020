import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import {Section} from '../../components/Section/Section';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import Link from "../../components/Link/Link";

export function JourneyZonePage() {
    return (
        <>
            <VikingBanner header="JourneyZone 2020" subHeader="Canvas Hotel"/>
            <CenterSection header={<h1>What is this?</h1>}>
                <p>
                    JourneyZone is our annual trip exclusively for speakers just after the JavaZone conference. This
                    year we will take you to the Mecca of singletrack biking and glamping – Canvas Hotel. Together with
                    29 other fellow speakers from JavaZone you will enjoy the silence of the wilderness. As Canvas
                    describes themselves, “glamping in luxurious yurt tents, incredible scenery, mountain biking at its
                    very best, unforgettable nature and fantastic food”.
                </p>
            </CenterSection>
            <ImageSection path="2020/journeyzone/" imageName="bath"/>
            <Section header={<h1>Why?</h1>}>
                <p>
                    Because we can and because we would you to spend quality time with quality people.
                </p>
            </Section>
            <Section header={<h1>when? where?</h1>}>
                <p>
                    We are leaving Oslo by dawn. Meet up Friday September 11th 0800 sharp at the bus stop next to
                    Radisson Blu Plaza. You can plan with returning to the same place no later than 1900 on Sunday (that
                    would be 8AM and 7PM to you Americans).
                </p>
                <p>
                    The entire trip is planned, all you need to do is to show up for the bus departure and bring some
                    gear. You will need clothes for being outdoors in September and biking in. All biking gear will be
                    arranged. Accommodation is glamping. No sleeping bag required for this trip (We will send a more
                    detailed packing list closer to the event). Have a look at this video for inspiration and temptation
                </p>
                <Link external url="https://www.youtube.com/watch?v=vxvXTLzbVB8">See video</Link>
            </Section>
            <ImageSection path="2020/journeyzone/" imageName="fun"/>
            <CenterSection header={<h1>Who can attend?</h1>}>
                <p>
                    All speakers of JavaZone are invited, but we have a limited number of spots available for the
                    journey. Those who hold full presentations and workshops are prioritized, but presenters of
                    lightning talks are of course also welcome to apply!
                </p>
                <p>
                    In order to attend, you must be in a physical condition that allows you to dude around on bikes for
                    two days and have a freezing swim afterward. No extraordinary physical activity is required by
                    participants.
                </p>
            </CenterSection>
            <Section header={<h1>Personal expenses</h1>}>
                <p>
                    JavaZone will cover almost all your expenses which are considered your reward for holding your talk
                    at the conference. To ensure that we stretch the budget to accommodate as many as possible we
                    require that all attendees pay NOK 1500.
                </p>
            </Section>
            <Section header={<h1>The program</h1>}>
                <p>
                    The program is, as usual, tightly packed, but we guarantee you will have a getaway from the everyday
                    buzz. The bus will take from to and from Canvas Hotel – the time in between departure and arrival
                    will be filled with great activities, great food and great company!
                </p>
            </Section>
            <CenterSection>
                <p>
                    All images © Canvas hotels <a style={{"color": "#F05350"}}
                                                  href="https://canvasnorway.com/">https://canvasnorway.com/</a>
                </p>
            </CenterSection>

            <ImageSection path="2020/journeyzone/" imageName="bike"/>
        </>
    )
}
