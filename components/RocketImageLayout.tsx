

type DescType = {
    images: string[]
}

export const RocketImageLayout = ({images}: DescType) => {
    return (
        <>
            <div className="mt-16 ">
                <div className="grid md:grid-cols-2 gap-4" >
                    {images?.map((image, index) => {
                        return (
                        <img className="object-cover w-full h-96" key={index} src={image} />
                        )
                    })}
                </div>
                
            </div>
            
        </>
    )
}