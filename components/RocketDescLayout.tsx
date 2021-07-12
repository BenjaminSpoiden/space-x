import { Rocket } from "../generated"
import { formatNumber } from "../utils/formatNumber"

type DescType = Rocket

export const RocketDescLayout = ({desc}: {desc: DescType}) => {
    return (
        <>
            <div className="grid gap-4 max-w-full w-full md:grid-cols-2 mt-16">
                <div className="flex justify-center items-center " >
                    <p className="max-w-sm text-justify font-news-cycle text-white font-bold text-2xl " >
                        {desc?.description}
                    </p>
                </div>
                <div className="text-white mt-8 font-news-cycle text-3xl" >
                    <p className="font-news-cycle self-start text-sm font-bold uppercase pb-2 " >{desc?.rocket_name}</p>
                    <h1 className="md:text-5xl text-3xl font-news-cycle font-bold self-start pb-8 over " >SPECIFICATIONS</h1>
                    <div className="divide-y divide-gray-400" >
                       
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                        <p className="uppercase font-bold">Diameter: </p>{desc?.diameter ? `${desc?.diameter?.feet}ft / ${desc?.diameter?.meters}m` : 'N/A'}
                        </span>

                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className=" uppercase font-bold ">Mass: </p>{desc?.mass ? `${formatNumber(desc?.mass?.lb)} ft / ${formatNumber(desc?.mass?.kg)} kg` : "N/A"}
                        </span>

                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className="uppercase font-bold">Height: </p>{desc?.height ? `${desc.height?.feet}ft / ${desc?.height?.meters}m` : "N/A"}
                        </span>

                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className="uppercase font-bold">Landing Legs: </p>{desc?.landing_legs ? `${desc?.landing_legs?.material} / ${desc?.landing_legs?.number} unit` : 'N/A'}
                        </span>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
} 