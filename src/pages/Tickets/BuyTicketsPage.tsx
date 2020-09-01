import React, {useLayoutEffect} from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import Link from "../../components/Link/Link";
import styles from './BuyTicketsPage.module.scss';


function newHeight(height: number) {
    // @ts-ignore
    document.getElementById("checkout-iframe").style.height = `${height}px`
}

export function BuyTicketsPage() {
    const minHeight = 650;
    useLayoutEffect(() => {
        window.onmessage = (e: any) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                const height: number = e.data.frameHeight;
                if (height < minHeight) {
                    newHeight(minHeight);
                } else if (height > minHeight) {
                    newHeight(height + 60);
                }
            }
        };
    }, []);

    return (
        <>
            <VikingBanner header="The Ticket Booth" subHeader="Get your tickets now!"/>
            <CenterSection>
                <div className={styles.back}>
                    <Link url="/tickets">
                        Back
                    </Link>
                </div>
                <iframe className={styles.iframe} id="checkout-iframe" width="100%" height={minHeight}
                        title="Checkout page" src={`/checkout.html#22303`}/>
            </CenterSection>
        </>
    )
}
