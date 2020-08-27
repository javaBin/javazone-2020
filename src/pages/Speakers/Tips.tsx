import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import {Figure} from "../../components/Figure/Figure";

export function SpeakerTipsPage() {
    return (
        <>
            <VikingBanner header="Tips And Tricks for Speakers" subHeader="Make that abstract shine"/>
            <Section color="blue" header={<h1>Increase the chance of your talk being accepted</h1>}>
                <p>
                    There is generally a very high correlation between how much work one puts into the creation of a
                    proposal and the chance that the proposal is accepted. Even a proposal with an extremely cool theme,
                    entertaining title, and an experienced speaker may be excluded if the description is lacking. We
                    have gathered some tips that should be considered when writing a JavaZone proposal, and a few
                    reasons why proposals may be rejected.
                </p>
            </Section>
            <Figure name="toke"/>

            <Section color="blue" header={<h1>Things to think about when writing your abstract</h1>}>
                <p>
                    <h3>Create a good title</h3>
                    The title is the first thing people will see. A poorly worded title may be the only thing many will
                    see of your proposal. A good title is catchy and concise, and should describe what you will talk
                    about.
                </p>
                <p>
                    <h3>Write a catchy abstract</h3>
                    The abstract is what will be featured in the JavaZone program for the public to read. If the program
                    committee doesn't believe that the abstract is good enough to convince people to come to your
                    presentation then the proposal won't be accepted.
                </p>
                <p>
                    <h3>Provide a detailed outline</h3>
                    The outline is your chance to pitch the proposal to the program committee. This section will not be
                    published, but if your outline is thin or just a copy of your abstract then you're not selling
                    yourself well.
                </p>
                <p>
                    <h3>Be concise</h3>
                    With an exciting theme, it's easy to find many things one wants to present. Don't get carried away.
                    Your proposal outline should explain how you will cover everything in a clear and structured manner.
                </p>
                <p>
                    <h3>Include supporting materials</h3>
                    If you've held the talk before then please include links to any supporting material that you can
                    show us. This could be video recordings, slide decks, blogs posts, GitHub repositories, photos, etc.
                </p>
                <p>
                    <h3>Fill out all mandatory fields properly</h3>
                    Nothing says you haven't put much effort into your proposals like a submission form filled with
                    'TODO' or 'TBD' in the required fields. This is fine for the initial submission, but please make
                    sure the required information is filled out properly by the submission deadline.
                </p>
                <p>
                    <h3>Ask someone to review your proposal</h3>
                    If your proposal is full of typos it will be noticed (especially in key fields such as the title).
                    This isn't a point that will necessarily mean the proposal will be rejected, but it doesn't help
                    your case.
                </p>
                <p>
                    <h3>Do you plan on doing live coding? Be sure to describe your plan to us</h3>
                    Live coding can make a presentation more entertaining, but it also increases the chances of
                    something going wrong. If the program committee doesn't get the feeling that you have a solid plan
                    for the demonstration then it might hurt your chances to be accepted.
                </p>
                <p>
                    <h3>Send in multiple proposals</h3>
                    If you have multiple things you can talk about then submitting 2 or 3 different proposals will
                    increase your chances of finding a place in the schedule.
                </p>
                <p>
                    <h3>... but please don't spam us</h3>
                    The program committee reviews hundreds of proposals each year. A few well-written proposals are much
                    more valuable than a bucket full of half-prepared ideas.
                </p>
                <p>
                    <h3>Don't shout</h3>
                    You will definitely be noticed IF YOUR TITLE IS ENTIRELY UPPERCASE (!!!!!!!!), but not necessarily
                    in a positive way.
                </p>
            </Section>

            <Section color="blue" header={<h1>Why was my talk rejected?</h1>}>
                <p>
                    Even though we are rooting for your talk to be accepted, the fact is that some talks must be
                    rejected. Read through these tips to understand why this might happen. Even better, if you are
                    reading this before the Call for Speakers deadline, you can go through your proposal and make sure
                    you do your best to avoid these common pitfalls.
                </p>
                <p>
                    <h3>Not Enough information</h3>
                    The program committee was not sure what you're going to present, or there was not enough information
                    about the technology/things you want to talk about to decide how awesome the presentation will be.
                </p>
                <p>
                    <h3>The proposal is too thin</h3>
                    The abstract doesn't convey the feeling that you have put a lot of work into it, or that you have
                    thought through your presentation.
                </p>
                <p>
                    <h3>You want to talk about more than we think you'll have time to cover</h3>
                    10-minute lightning talk proposals that appear to require double that time will be discounted. The
                    same applies to proposals that try to cover everything possible instead of focusing on a specific
                    area. If you want to cover a breadth of material then be sure to convey to us that you have thought
                    through the timeline for your talk. We must feel that you believe that it will work, something that
                    can be achieved with a clear and detailed outline.
                </p>
                <p>
                    <h3>The abstract was not catchy enough</h3>
                    If the committee ends up with 600 or so proposals to go through, time becomes a factor. This is
                    especially true in the first pass, and in the early stages. If your abstract catches the fancy of
                    just one or more of the committee members, your proposal is likely to be thumbs-upped to the next
                    phase. If not, it tends to drop out of the race early. It will help your chances to describe
                    accurately and concisely what you want to talk about, and why people should come and listen to you.
                </p>
                <p>
                    <h3>The theme did not fit in with what we want to include in the program this year</h3>
                    Even though JavaZone has a place for many themes, there are some proposals that don't fit. Some
                    proposals are rejected because we feel the presentation would be better served at a different
                    conference.
                </p>
                <p>
                    <h3>Your co-presenter had a different proposal accepted</h3>
                    If you intend to present with a co-presenter, and she happens to have had a separate proposal
                    already accepted then we may have to reject your joint proposal.
                </p>
                <p>
                    <h3>You were unlucky</h3>
                    We often receive multiple good proposals covering exactly the same topic. The program committee then
                    has to decide between these multiple excellent submissions. In 2016 we received many great proposals
                    covering "how we do DevOps in the cloud". Limited space in the program meant that many of these
                    ended up being rejected.
                </p>
            </Section>
        </>
    )
}
