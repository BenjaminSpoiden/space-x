import Head from "next/head"
import React from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

type Props = {
    title: string
    children: JSX.Element
}

export const Layout = ({ title, children }: Props) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body className="bg-gray-800" >
                <Navbar />
                <div className="mx-2">
                    {children}
                </div> 
                <Footer />
            </body>
        </>
    )
}