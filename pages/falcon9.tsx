import { useRouter } from "next/dist/client/router"
import { getDataFromTree } from "@apollo/client/react/ssr"
import { Layout } from "../components/Layout"
import { RocketDescLayout } from "../components/RocketDescLayout"
import { RocketImageLayout } from "../components/RocketImageLayout"
import { RocketLayout } from "../components/RocketLayout"
import { useRocketQuery } from "../generated"
import { withApollo } from "../lib/withApollo"

function FalconOne() {

    const { data } = useRocketQuery({ variables: {rocketName: "falcon9"} })
    console.log(data)
    return (
        <Layout title="Falcon One">
            <main className="max-w-8xl mx-auto">
                <div className="flex flex-col justify-center items-center max-w-8xl mx-auto min-h-screen py-6 sm:px-6 lg:px-8">
                    <RocketLayout rocket={data?.rocket} image="/falcon_9.png" />
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


export default withApollo(FalconOne, { getDataFromTree })