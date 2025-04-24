import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLinks } from "../NavComp/NavFucn";

// Define NewsTypes for better type safety
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

export const FeaturesNewsGrid = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const location = useLocation().pathname;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://richapi.vercel.app/post-category/Featured"
        );
        const data = await response.json();

        if (data.status == "success") {
          setNews(data.posts);
        } else {
          console.log(response);
        }
      } catch (error: any) {
        console.error("Error fetching news:", error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 md:gap-10 sm:grid-cols-[1fr_300px]">
      {/* News List Section */}
      <div className="grid grid-cols-1 gap-10 px-4 sm:px-2">
        {news?.map((item) => (
          <Link
            to={`/news/${item._id}`}
            key={item._id}
            className="flex flex-col md:flex-row cursor-pointer group gap-2"
          >
            <div className="w-full flex-1 h-[250px] md:h-[300px] rounded-md overflow-hidden bg-gray-200">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-full group-hover:scale-105 duration-500 h-full object-cover"
              />
            </div>
            <div className="flex flex-1 group-hover:text-red-500 duration-300 justify-center flex-col gap-4">
              <p className="font-semibold text-lg">{item?.title}</p>
              <p>{item?.title}</p>
              <p>{item?.date}</p>
            </div>
          </Link>
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
                  className={`text-white border-b-[1px] flex items-center justify-between outline-none pb-5 ${
                    isActive ? "font-bold text-yellow-400" : ""
                  }`}
                  to={el.to}
                >
                  {el.name}
                  {isActive && (
                    <BsArrowRight
                      size={22}
                      className="text-yellow-400 font-semibold ml-2"
                    />
                  )}
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
    <div className="h-[500px] w-full bg-lime-500 flex justify-center items-center">
      <p className="font-semibold">Ads Banner</p>
    </div>
  );
};
