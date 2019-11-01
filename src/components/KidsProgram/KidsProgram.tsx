import * as React from 'react';
import {KidsProgramSection} from "./KidsProgramSection";
import {kidsProgram} from "../../core/data/Kids.data";

function createMarkup(s: string) { return {__html: s}; };

export function KidsProgram() {
    return <>
        {kidsProgram.map(section =>
            <KidsProgramSection
                header={section.title}
                speakers={section.speakers}
                imageName={section.image}
                imageType={section.imageType}
                moreInfoLink={section.moreInfoLink}
                registrationLink={section.registrationLink}>
                <div dangerouslySetInnerHTML={createMarkup(section.desc)} />
                <p><b>Utstyr:</b> {section.gear}</p>
                <p><b>Anbefalt alder:</b> {section.recommendedAge}</p>
            </KidsProgramSection>
        )}
        </>
}