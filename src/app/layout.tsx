import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import Image from 'next/image';

import nicola from './img/nicola.png';
import tano from './img/tano.png';
import omino1 from './img/omino-1.png';
import omino2 from './img/omino-2.png';
import omino3 from './img/omino-3.png';
import omino4 from './img/omino-4.png';

import inrecruiting_img from './img/inrecruiting.png';
import ribbonBottom_img from './img/ribbonBottom.png';
import ribbonTop_img from './img/ribbonTop.png';

import './globals.css'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Christmas PartIN',
    description: 'Generated by create next app',
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Image src={ribbonTop_img} className="ribbonTopImg" alt="ribbon top" />
                <Image src={nicola} className="nicola" alt="nicola" />

                <PrimeReactProvider value={{ unstyled: true }}>
                    {children}
                </PrimeReactProvider>

                <Image src={tano} className="tanoImg" alt="tano" />
                <Image src={omino1} className="omino1" alt="omino1" />
                <Image src={omino2} className="omino2" alt="omino2" />
                <Image src={omino3} className="omino3" alt="omino3" />
                <Image src={omino4} className="omino4" alt="omino4" />

                <Image src={ribbonBottom_img} className="ribbonBottomImg" alt="Inrecruiting" />
                <Image src={inrecruiting_img} className="inrecruitingImg" alt="ribbon bottom" />
            </body>
        </html>
    )
}
