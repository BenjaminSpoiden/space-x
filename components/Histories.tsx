import React from "react"
import { History } from "../generated"

type HistoriesType = History[]


export const Histories = ({histories}: {histories: HistoriesType}) => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 md:mt-28 gap-4">
            {
                histories?.map((history, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`flex flex-col bg-gray-900 ${index % 3 === 0 ? "md:col-span-4" : "md:col-span-2"} bg-opacity-50 shadow-lg p-10`} 
                            >
                                <h1 className="text-2xl font-big-shoulder-display font-bold text-gray-300">
                                    {history?.title}
                                </h1>
                                <p className="text-lg my-4 first-letter:float-left first-letter:text-5xl first-letter:pr-4 text-gray-300 font-thin text-justify " >
                                    {history?.details}
                                </p>
                                <a className="self-end" href={history?.links?.article}><p 
                                    className=" hover:underline hover:cursor-pointer tracking-widest font-mono text-blue-500">
                                        READ MORE&#8250;
                                </p></a>
                        </div>
                    )
                })
            }
        </div>
    )
}