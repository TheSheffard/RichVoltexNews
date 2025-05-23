import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLinks } from "../NavComp/NavFucn";
import { BsArrowRight } from "react-icons/bs";

// News type definition
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

export const BusinessNewsGrid = () => {
  const [europeNews, setEuropeNews] = useState<NewsTypes[]>([]);
  const [displayCount, setDisplayCount] = useState(20);

  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://punchscrapper.onrender.com/post/Business"
        );
        const data = await response.json();
        setEuropeNews(data.posts);
      } catch (error) {
        console.error("Error fetching Lite news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 40); // Increase the display count by 40
  };

  return (
    <div className="grid grid-cols-1  gap-3 md:gap-10 sm:grid-cols-[1fr_300px]">
      {/* News List Section */}
      <div>
        <div className="grid grid-cols-1  gap-10 px-4 sm:px-2">
          {europeNews.slice(0, displayCount).map((news, index) => (
            <div
              onClick={() => navigate(`/news/${news._id}`)}
              key={index}
              className="flex flex-col md:flex-row cursor-pointer group gap-10"
            >
              <div className="w-full flex-1  h-[250px] md:h-[400px] rounded-md overflow-hidden bg-orange-400">
                <img
                  src={news?.image}
                  alt={news.title}
                  className="w-full group-hover:scale-105 duration-500 h-full object-cover"
                />
              </div>
              <div className="flex-1   group-hover:text-red-500 duration-300 justify-center flex-col gap-4">
                <p className="font-semibold text-lg">{news?.title}</p>
                <p>{news?.title}</p>
                <p>{news?.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}

        {europeNews.length > displayCount && (
          <div className="flex justify-center my-6">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-4 py-3 font-semibold rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>


      {/* Sidebar Section */}
      <div className="flex flex-col px-4 gap-5 bg-black h-fit py-2 mt-5">
        <p className="font-semibold text-white text-lg">Categories</p>
        <div className="flex flex-col gap-5">
          {NavLinks.map((el) => {
            const isActive = location == el.to;
            return (
              <Link
                key={el.to}
                className={`text-white border-b-[1px] flex items-center justify-between outline-none pb-5 ${isActive ? "font-bold text-yellow-400" : ""
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
    </div>
  );
};


