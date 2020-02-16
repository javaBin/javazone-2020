import React, {useLayoutEffect} from 'react';
import {PageBanner} from '../../components/PageBanner/PageBanner';
import {Seperator} from '../../components/Seperator/Seperator';
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
            <PageBanner header="The Ticket Booth" subHeader={`Get your tickets now!`}
                        imageName="2018/180912_JavaZone_0019"/>
            <Seperator/>
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
