import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {cn} from "@/lib/utils"
import NavBar from "@/components/NavBar"
import Providers from "@/components/Providers"

import "react-loading-skeleton/dist/skeleton.css"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            lang='en'
            className='light'
        >
            <Providers>
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased grainy",
                        inter.className,
                    )}
                >
                    <NavBar />
                    {children}
                </body>
            </Providers>
        </html>
    )
}
