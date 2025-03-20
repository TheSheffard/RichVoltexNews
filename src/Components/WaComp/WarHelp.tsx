import { Link, useLocation } from "react-router-dom";
// import image from "../../../../public/img44.jpg";
import { NavLinks } from "../NavComp/NavFucn";
import {  BsArrowRight } from "react-icons/bs";

export const WarNewsGrid = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const location = useLocation().pathname;

    return (
        <div className="grid grid-cols-1 gap-3 md:gap-10 sm:grid-cols-[1fr_300px]">
            {/* News List Section */}
            <div className="grid grid-cols-1 gap-10 px-4 sm:px-2">
                {array.map((_, index) => (
                    <div key={index} className="flex flex-col md:flex-row cursor-pointer group gap-2">
                        <div className="w-full h-[250px] md:h-[300px] rounded-md overflow-hidden bg-orange-400">
                            {/* <img src={image} alt="" className="w-full group-hover:scale-105 duration-500 h-full object-cover" /> */}
                        </div>
                        <div className="flex group-hover:text-red-500 duration-300 justify-center flex-col gap-4">
                            <p className="font-semibold text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci eum illo placeat dolores numquam. Labore
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci eum illo placeat dolores numquam. Labore</p>
                            <p>May 22, 2025</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar Section */}
            <div className="w-full flex flex-col gap-10 h-auto">
                <div className="flex flex-col px-4 gap-5 bg-black py-2 mt-5">
                    <p className="font-semibold text-white text-lg">Categories</p>
                    <div className="flex flex-col gap-5">
                        {NavLinks.map((el) => {
                            const isActive = location == el.to;
                            return (
                                <Link 
                                    key={el.to}
                                    className={`text-white border-b-[1px] flex items-center justify-between outline-none pb-5 ${
                                        isActive ? "font-bold text-yellow-400" : ""
                                    }`} 
                                    to={el.to}
                                >
                                    {el.name} 
                                    {isActive && <BsArrowRight size={22} className="text-yellow-400 font-semibold ml-2" />}
                                </Link>
                            );
                        })}
                    </div>
                </div>
               <Ads/>
                
            </div>
        </div>
    );
};

const Ads = ()=>{
    return(
        <div className="h-[60%] w-full bg-lime-500">

            <p className="font-semibold justify-center flex items-center">Ads Banner</p>

        </div>
    )
}