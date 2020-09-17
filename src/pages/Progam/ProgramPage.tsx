import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {VRProgram} from "../../components/VRProgram/VRProgram";
import React from "react";


export function ProgramPage(){
    return (
        <>
            <VikingBanner header="JavaZone VR Program 2020" subHeader="Watch the videos" />
            <CenterSection color="blue" header={<h1>Program</h1>}>
                <VRProgram />
            </CenterSection>
        </>
    )
};
