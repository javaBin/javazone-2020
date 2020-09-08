import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React, {useState} from "react";
import {Section} from "../../components/Section/Section";
import {ActiveButton, ButtonGroup} from "../../components/Button/ButtonGroup";
import {program} from "../../core/data/Program.data";
import {InlineLink} from "../../components/InlineLink/InlineLink";




export function LivePage(){

    const [selectedProgram, setSelectedProgram] = useState(program[0]);

    function activeButton(button: ActiveButton) {
        setSelectedProgram(program[button.key]);
    }

    return (
        <>
            <VikingBanner header="Livestream" subHeader="Watch the program, and ask questions" />
            <CenterSection color="blue">
                <ButtonGroup activeButton={(button: ActiveButton) => activeButton(button)}>
                    <button>Teknologihuset - Oslo</button>
                    <button>NAV - Oslo</button>
                    <button>Virtual</button>
                    <button>Kantega - Trondheim</button>
                </ButtonGroup>
            </CenterSection>
            <CenterSection color="blue">
                <div style={{"padding":"56.25% 0 0 0", "position": "relative"}}>
                    <iframe src={selectedProgram.liveEmbeddedUrl}
                            title="live stream"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            style={{"position":"absolute", "top": 0, "left":0, "width":"100%", "height":"100%"}}/>
                </div>

            </CenterSection>
            <CenterSection color="blue" header={<h1>Q&A</h1>}>
                <div style={{"padding":"56.25% 0 0 0", "position": "relative"}}>
                    <iframe src={selectedProgram.slido}
                            title="ask question to the speaker"
                            style={{"position":"absolute", "top": 0, "left":0, "width":"100%", "height":"100%"}}/>
                </div>
            </CenterSection>
            <Section color="blue" header={<h1>If technical problems</h1>}>
                <p>The live streams can be watched directly from vimeo. Press one of the links below to reach the stream</p>
                <ul>
                    <li><InlineLink external color="blue" url={program[0].liveEmbeddedUrl}>Teknologihuset - Oslo</InlineLink></li>
                    <li><InlineLink external color="blue" url={program[1].liveEmbeddedUrl}>NAV - Oslo</InlineLink></li>
                    <li><InlineLink external color="blue" url={program[2].liveEmbeddedUrl}>Virtual</InlineLink></li>
                    <li><InlineLink external color="blue" url={program[3].liveEmbeddedUrl}>Kantega - Trondheim</InlineLink></li>
                </ul>

                <p>The Q&A is from slido. During the live stream you can ask the speakers questions by going to <InlineLink external color="blue" url={"https://slido.com"}>slido.com</InlineLink> and entering the event code (28451). You can also view questions from other attendees.Make sure to ask your question in the correct track!</p>
            </Section>
        </>
    )
};
