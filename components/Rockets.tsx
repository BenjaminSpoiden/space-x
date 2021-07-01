import Image from "next/image"

export const Rockets = () => {

    return (
        <section id="rockets" className="grid min-h-screen">
            <div className="grid gap-4 grid-rows-4">
                <div className="flex relative max-w-xs w-full mx-auto bg-gray-400">
                    
                    <h2 className=" absolute p-2 right-full top-0 whitespace-nowrap uppercase text-gray-100 font-big-shoulder-display font-bold text-6xl transform rotate-270 origin-top-right bg-gray-800" > 
                        Falcon 9 
                    </h2>
                    
                    <img className="block mx-auto max-h-100 h-auto" src="/falcon_9.png" alt="me"/>
                </div>
                <div className="flex relative max-w-xs w-full mx-auto bg-gray-500" >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Falcon Heavy 
                    </h2>
                    <img className="block mx-auto max-h-100 h-auto" src="/falcon_heavy.png" alt="me"/>
                </div>
                <div className="flex relative max-w-xs w-full mx-auto bg-gray-600" >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Dragon 
                    </h2>
                    <img className="block mx-auto  max-h-100 h-auto" src="/falcon_dragon.png" alt="me"/>
                </div>
                <div className="flex relative max-w-xs w-full mx-auto bg-gray-300" >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Starship 
                    </h2>
                    <img className="block mx-auto max-h-100 h-auto" src="/starship.png" alt="me"/>
                </div>
            </div>
        </section>
    )
}

