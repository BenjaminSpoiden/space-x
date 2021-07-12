import { withApollo } from "../lib/withApollo"
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRocketQuery } from "../generated"
import { Layout } from "../components/Layout"
import React from "react"
import { RocketLayout } from "../components/RocketLayout"
import { RocketImageLayout } from "../components/RocketImageLayout"
import { RocketDescLayout } from "../components/RocketDescLayout"

function FalconHeavy() {

    const { data } = useRocketQuery({ variables: {rocketName: "falconheavy"} })

    return (
        <Layout title="Falcon Heavy">
            <main className="max-w-8xl mx-auto" >
                <div className="flex flex-col justify-center items-center max-w-8xl mx-auto min-h-screen py-6 sm:px-6 lg:px-8">
                    <RocketLayout rocket={data?.rocket} image="/falcon_heavy.png" />
                    <RocketImageLayout images={data?.rocket?.flickr_images} />
                    <RocketDescLayout desc={data?.rocket} />
                </div>
                <a href={data?.rocket?.wikipedia}>
                    <button 
                        className="flex mx-auto hover:bg-yellow-500 transition ease-in-out duration-300 hover:text-white text-yellow-500 font-mono px-4 py-2 m-16 border-2 border-dashed border-yellow-500" 
                    >
                        Read more
                    </button> 
                </a>
            </main>
        </Layout>
    )
}

export default withApollo(FalconHeavy, { getDataFromTree })