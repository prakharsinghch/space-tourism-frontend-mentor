import { useState } from "react"
import { technology } from "../starter-code/data.json";

export default function Technology() {
    const [cards] = useState(technology)
    const [value, setValue] =  useState(0)

    const {name, images, description} = cards[value]

    return(
       <>
        <section className="home technology px-5">
            <h1 className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-4xl lg:text-3xl uppercase mb-10">03 Space Launch 101</h1>

            <div className="flex items-center justify-center md:grid grid-cols-2 gap-5 md:items-center lg:flex-row-reverse lg:max-w-7xl lg:mx-auto">

                <article className="text-center lg:text-left lg:flex items-center ">
                    <div>
                    {cards.map((item,index)=>(
                        <button key={index} onClick={()=>setValue(index)} className={`uppercase text-white text-2xl rounded-full h-12 w-12 p-2 pb-2 m-2 mr-5 border-2 border-white${index === value && " text-gray-800 bg-white"}`}>
                            {index +1}
                        </button>
                    ))}
 
                    </div>
                    <div className="lg:ml-5 ">
                    <h4 className="uppercase text-gray-400 mb-10 text-2xl">The Terminology...</h4>
                    <h2 className="text-5xl font-bold text-white my-5 uppercase tracking-wideset">{name}</h2>
                    <p className="text-gray-400 mb-10">{description}</p>
                    </div>

             
                </article>

                <article>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={images.portrait} />
                        <img src={images.portrait} alt={name} title={name} className="block mx-auto mb-10 "/>
                    </picture>
             </article>
             
            </div>
        </section>
       </>
    )
}