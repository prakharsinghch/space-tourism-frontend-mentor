import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
        <section className="home px-5">
            <div className="overlay lg:w-1/2 ">
               <article>
                <h1 className="text-2xl text-gray-400 uppercase" >So, You Want to Travel To <span className="block text-8xl text-white mt-5 mb-10">SPACE</span></h1>
                 <p className="text-gray-400 text-xl">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                 </p>
               </article>
               <article className="mt-20 lg:ml-20">
                    <button className="w-52 h-52 rounded-full bg-white text-gray-800 uppercase font-bold text-4xl lg:text-5xl animate-pulse">
                        <Link to="/Destination">Explore</Link>
                    </button>
               </article>
            </div>

        </section>

        </>
    )
}
