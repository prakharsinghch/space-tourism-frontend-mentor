import { Link } from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg"

export default function Header(){

    const handleClick = ()=>{
        const navbar =document.querySelector(".navbar")
        const listItems=document.querySelectorAll(".list-item")

        navbar.classList.toggle("open")

        listItems.forEach((item)=> item.addEventListener("click", ()=>navbar.classList.remove("open")) )
    }
    return(
        <>
        <header className="header flex items-center justify-between w-full lg:flex-row" >
            <div>
                <Link to="/"><img src={logo} alt="space-tourism" title="space-tourism"/></Link>
            </div>
  
            <nav className="navbar">
                <ul>
                    <li className="list-item">
                        <Link to="/" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">00</span>HOME</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Destination" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">01</span>DESTINATION</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Crew" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">02</span>CREW</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Technology" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">03</span>TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>

            <div className="lg:hidden">
                <button onClick={handleClick}>
                    <CgMenuLeft className="text-white text-4xl"/>
                </button>
            </div>

       
        </header>
        </>

    )
}