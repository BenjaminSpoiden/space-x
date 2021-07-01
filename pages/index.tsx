import Head from 'next/head'
import { withApollo } from '../lib/withApollo'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useInfoQuery } from '../generated'
import { Layout } from '../components/Layout'
import { Rockets } from '../components/Rockets'

function Home() {

  const { data } = useInfoQuery()

  return (
    <Layout title="Create Next App" >
      <div>
        <main className="max-w-8xl mx-auto ">
          <div className="flex max-w-8xl mx-auto min-h-screen py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center" >
              <p className="text-center font-big-shoulder-display font-regular text-gray-100 text-4xl " >{data?.info?.summary}</p>
            </div>
          </div> 
          <Rockets />
        </main>
      </div>
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
