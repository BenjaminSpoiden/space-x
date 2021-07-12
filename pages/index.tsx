import Head from 'next/head'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { withApollo } from '../lib/withApollo'
import { useHistoryQuery, useInfoQuery } from '../generated'
import { Layout } from '../components/Layout'
import { Rockets } from '../components/Rockets'
import React, { useState } from 'react'
import { Histories } from '../components/Histories'
import { Spinner } from '../components/Spinner'

function Home() {

  const { data } = useInfoQuery()
  const [limit, setLimit] = useState(3)
  const [isLoading, setIsLoading] = useState(false)

  const { data: histories, fetchMore } = useHistoryQuery({
    variables: {
      limit, 
      offset: 0
    }
  })

  return (
    <Layout title="SpaceX" >
      <div>
        <main className="max-w-8xl mx-auto ">
          <div className="flex max-w-8xl mx-auto min-h-screen py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center" >
              <p className="text-center font-big-shoulder-display font-regular text-gray-100 text-4xl " >{data?.info?.summary}</p>
            </div>
          </div> 
          <Rockets />
          <div> 
            <h1 className="py-10 mt-10 font-mono font-bold text-2xl tracking-widest text-yellow-500 ">NEWS</h1>
            <Histories histories={histories?.history} />
            {limit < 20 ? <button 
              className="flex mx-auto hover:bg-yellow-500 transition ease-in-out duration-300 hover:text-white text-yellow-500 font-mono px-4 py-2 m-16 border-2 border-dashed border-yellow-500 " 
              onClick={() => {
                const currentLen = histories?.history?.length
                setIsLoading(c => !c)

                fetchMore({
                variables: {
                  offset: currentLen,
                  limit: 6
                }}).then(fetchMoreResults => {
                  setLimit(currentLen + fetchMoreResults?.data?.history?.length)
                  setIsLoading(c => !c)
                })
                
              }}>
                {isLoading ? <Spinner /> : null}
                Fetch more
            </button> : <div className="grid grid-cols-3 font-mono my-16 md:mx-24 text-yellow-500">
                <span className="hidden md:block border-t-2 mt-3 border-yellow-500 border-dashed" ></span>
                <p className="flex col-span-3 md:col-span-1 justify-center mx-auto" >No more news...</p>
                <span className="hidden md:block border-t-2 mt-3 border-yellow-500 border-dashed" ></span>
              </div>}
            
          </div>
        </main>
      </div>
      
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
