import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { NavLinks } from "../NavComp/NavFucn";


type NewsTypes = {
    _id: string;
    categoryId: string;
    categoryName: string;
    title: string;
    image: string;
    date: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
export const SportsNewsGrid = () => {
    const [news, setNews] = useState<NewsTypes[]>([]);
    const location = useLocation().pathname;
    const navigate = useNavigate();



    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("https://richapi.vercel.app/post-category/Sports");
                const data = await response.json();
                setNews(data.posts);
            } catch (error) {
                console.error("Error fetching science news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-3 md:gap-10 sm:grid-cols-[1fr_300px]">
            {/* News List Section */}
            <div className="grid grid-cols-1 gap-10 px-4 sm:px-2">
                {news.map((item, index) => (
                    <div onClick={() => navigate(`/news/${item._id}`)} key={index} className="flex flex-col md:flex-row cursor-pointer group gap-2">
                        <div className="w-full h-[250px] md:h-[300px] rounded-md overflow-hidden bg-orange-400">
                            <img src={item?.image} alt={item?.title} className="w-full group-hover:scale-105 duration-500 h-full object-cover" />
                        </div>
                        <div className="flex group-hover:text-red-500 duration-300 justify-center flex-col gap-4">
                            <p className="font-semibold text-lg">{item.title}</p>
                            <p>{item?.title}</p>
                            <p>{item?.date}</p>
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
                            const isActive = location === el.to;
                            return (
                                <Link
                                    key={el.to}
                                    className={`text-white border-b-[1px] flex items-center justify-between outline-none pb-5 ${isActive ? "font-bold text-yellow-400" : ""}`}
                                    to={el.to}
                                >
                                    {el.name}
                                    {isActive && <BsArrowRight size={22} className="text-yellow-400 font-semibold ml-2" />}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <Ads />
            </div>
        </div>
    );
};

const Ads = () => {
    return (
        <div className="h-[500px] w-full bg-lime-500">
            <p className="font-semibold justify-center flex items-center">Ads Banner</p>
        </div>
    );
};
