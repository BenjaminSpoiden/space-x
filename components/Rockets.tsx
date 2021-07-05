import Image from "next/image"

export const Rockets = () => {

    return (
        <section id="rockets" className="grid min-h-full">
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">

                <div className="flex relative max-w-xs w-full overflow-hidden mx-auto bg-light-purple bg-opacity-10">
                    
                    <h2 className=" absolute p-2 right-full top-0 whitespace-nowrap uppercase text-gray-100 font-big-shoulder-display font-bold text-6xl transform rotate-270 origin-top-right bg-gray-800" > 
                        Falcon 9 
                    </h2>

                    <div className="absolute top-1/4 left-3/4 w-60 h-60 rounded-full shadow-outer-mangeta">
                        <div className="bg-white shadow-inner-magenta w-full h-full rounded-full" />
                    </div>

                    <div className="absolute bottom-10 right-3/4  w-24 h-24 rounded-full shadow-outer-orange">
                        <div className="bg-white shadow-inner-orange w-full h-full rounded-full" />
                    </div>

                    <img className="block mx-auto max-h-100 h-auto" src="/falcon_9.png" alt="me"/>
                </div>

                <div className="flex relative overflow-hidden max-w-xs w-full mx-auto bg-light-green bg-opacity-10" >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Falcon Heavy 
                    </h2>

                    <div className="absolute -top-28 left-3/4 w-60 h-60 rounded-full shadow-outer-yellow">
                        <div className="bg-white shadow-inner-yellow w-full h-full rounded-full" />
                    </div>

                    <div className="absolute -right-12 bottom-10  w-24 h-24 rounded-full shadow-outer-green">
                        <div className="bg-white shadow-inner-green w-full h-full rounded-full" />
                    </div>

                    <img className="block mx-auto max-h-100 h-auto" src="/falcon_heavy.png" alt="me"/>
                </div>

                <div className="flex relative max-w-xs w-full mx-auto bg-cyan overflow-hidden bg-opacity-10 " >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Dragon 
                    </h2>

                    <div className="absolute top-1/2 right-3/4 w-60 h-60 rounded-full shadow-outer-cyan">
                        <div className="bg-white shadow-inner-cyan w-full h-full rounded-full" />
                    </div>

                    <div className="absolute top-10 right-4 w-24 h-24 rounded-full shadow-outer-purple">
                        <div className="bg-white shadow-inner-purple w-full h-full rounded-full" />
                    </div>

                    <img className="block mx-auto  max-h-100 h-auto" src="/falcon_dragon.png" alt="me"/>
                </div>

                <div className="flex relative max-w-xs w-full mx-auto bg-orange overflow-hidden bg-opacity-20  " >
                    <h2 className="absolute p-2 right-full whitespace-nowrap transform rotate-270 origin-top-right uppercase top-0 text-gray-100 font-big-shoulder-display font-bold text-6xl bg-gray-800" > 
                        Starship 
                    </h2>

                    <div className="absolute top-0 left-3/4 w-60 h-60 rounded-full shadow-outer-orange">
                        <div className="bg-white shadow-inner-orange w-full h-full rounded-full" />
                    </div>

                    <div className="absolute -left-10 bottom-4 w-24 h-24 rounded-full shadow-outer-pink">
                        <div className="bg-white shadow-inner-pink w-full h-full rounded-full" />
                    </div>

                    <img className="block mx-auto max-h-100 h-auto" src="/starship.png" alt="me"/>
                </div>
            </div>
        </section>
    )
}

