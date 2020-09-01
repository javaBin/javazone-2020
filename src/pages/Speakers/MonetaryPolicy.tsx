import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';

export function MonetaryPolicyPage() {
    return (
        <>
            <VikingBanner header="Reimbursement Policy" subHeader="Refunds for speakers" />
            <Section color="blue" header={<h1>What & How</h1>}>
                <p>
                    If your presentation or a workshop is accepted, you may apply for a refund for travel and accommodation. Read below to find out if you are eligible.
                </p>
                <p>
                    Applications for speaker reimbursements <strong><em>must</em></strong> be submitted before the August 1st, 2020.
                </p>
            </Section>
            <Section color="blue" header={<h1>How to Apply</h1>}>
                <p>
                    The first thing to note is that you need to <strong><em>apply</em></strong> for reminbursement of costs. This is necessary for our budget planning. If you require financial support, please reach out to <InlineLink color="blue" external url='mailto:refund@java.no'>refund@java.no</InlineLink> after your session or workshop was accepted.
                </p>
                <p>
                    In this mail, provide an estimate of your travel expenses and the days you will be visiting Oslo during the conference.
                </p>
                <p>
                    Note that we refund a maximum of 1500 NOK a night for accommodation costs <strong><em>during</em></strong> the conference. We do not refund travel costs above the cost of a reasonably priced economy ticket.
                </p>
                <p>
                    Please also note that we do not refund travel expenses for those holding lightning talks. However, speakers (including the ones holding lightning talks) will receive a free conference ticket.
                </p>
            </Section>
            <Section color="blue" header={<h1>Confirmation & Reimbursement</h1>}>
                <p>
                    Applications <strong><em>must</em></strong> be confirmed explicitly via <InlineLink color="blue" external url='mailto:refund@java.no'>refund@java.no</InlineLink> and are only accepted prior to our conference. Reimbursements are provided after the conference. For this, we require you to send us copies of all receipts, the name of your bank and international account numbers (IBAN, BIC/SWIFT, if available). We reserve the right to decline a refund application. Speakers living in proximity to Oslo are not eligible.
                </p>
                <p>
                    Reimbursements are processed and paid after the conference. We will reach out to speakers who applied for reimbursement and process the payments once payment details are provided.
                </p>
            </Section>
        </>
    )
}
