import { Rocket } from "../generated"
import { formatNumber } from "../utils/formatNumber"


type RocketType = Rocket

export const RocketLayout = ({rocket, image}: {rocket: RocketType, image: string}) => {

    console.log(rocket)

    return (
        <div className="flex text-white max-w-8xl flex-col justify-center w-full items-center mx-auto" >
            
            <div className="grid w-full mx-auto md:grid-cols-2">
                <div className="flex flex-col text-white justify-center  font-news-cycle text-3xl" >
                    <p className="font-news-cycle self-start text-sm font-bold uppercase pb-2 " >{rocket?.rocket_name}</p>
                    <h1 className="text-5xl font-news-cycle font-bold self-start pb-8 " >OVERVIEW</h1>

                    <div className="divide-y divide-gray-400" >
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm" >
                            <p className="uppercase font-bold ">Cost per launch: </p>${ formatNumber(rocket?.cost_per_launch) }
                        </span>
                        
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className="uppercase font-bold">First flight: </p>{rocket?.first_flight}
                        </span>
                        
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className="uppercase font-bold">Success Rate: </p>{rocket?.success_rate_pct}%
                        </span>
                    
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                            <p className="uppercase font-bold">Boosters: </p>{rocket?.boosters}
                        </span>
                        
                        <span className="flex justify-between capitalize mx-auto py-2 text-sm">
                        <p className="uppercase font-bold">Stages: </p>{rocket?.stages ? rocket.stages : "N/A"}
                        </span>
                    </div>
                    
                </div>

                <div className="flex mx-auto justify-center" >
                    <img className="block mx-auto max-h-100 h-auto" src={image} />
                </div>
            </div>
            
        </div>
    )
}