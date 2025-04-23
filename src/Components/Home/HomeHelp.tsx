import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

export const LongAdsBanner = () => {
  return (
    <p className="text-center py-16  border my-10 font-bold text-lg bg-lime-400">
      Ads Banner
    </p>
  );
};

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

export const HomeHero = () => {
  const [news, setNews] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodayNews = async () => {
      try {
        const response = await fetch("https://richapi.vercel.app/post-category/HomePage");
        const data = await response.json();
        setNews(data.posts);
      } catch (error: any) {
        console.error("Error fetching news:", error.message);
      }
    };

    fetchTodayNews();
  }, []);

  // Click handler to navigate to news details page
  const handleNavigate = (id: string) => {
    navigate(`/news/${id}`);
  };

  return (
    <div
      className="grid grid-cols-1 group cursor-pointer rounded-md md:grid-cols-2 gap-3 items-center h-full md:h-[70vh]"
      onClick={() => news.length > 0 && handleNavigate(news[0]._id)}
    >
      <div className="md:px-5 flex flex-col gap-3">
        {news.length > 0 && (
          <h1 className="bg-indigo-900 w-fit rounded text-white py-1 px-3 text-sm">
            News
          </h1>
        )}
        <p className="text-xl md:text-3xl font-semibold group-hover:text-red-500 duration-300">
          {news.length > 0 ? news[0].title : <Skeleton />}
        </p>
        <p className="font-semibold text-base group-hover:text-red-500 duration-300">
          {news.length > 0 ? (
            news[0].content.slice(0, 200) + "...."
          ) : (
            <Skeleton count={2} className="h-full w-full" />
          )}
        </p>
      </div>
      <div className="w-full h-[60vh] md:h-full overflow-hidden rounded-md">
        {news.length > 0 ? (
          <img
            src={news[0].image}
            alt={news[0].title}
            className="w-full cursor-pointer group-hover:scale-110 duration-500 h-full object-cover rounded-md"
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
    </div>
  );
};

export const TopNews = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchTodayNews = async () => {
      try {
        const response = await fetch("https://richapi.vercel.app/post-category/News");
        const data = await response.json();
        setNews(data.posts);
      } catch (error: any) {
        console.error("Error fetching news:", error.message);
      }
    };

    fetchTodayNews();
  }, []);

  return (
    <div className="md:h-screen w-full gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
      {/* Top Image (Displaying news[1]) */}
      <div
        className="flex group cursor-pointer flex-col shadow-md p-4 gap-4"
        onClick={() => news.length > 1 && navigate(`/news/${news[1]._id}`)} // Navigate on click
      >
        <div className="flex-1 max-h-[550px] bg-blue-600 rounded-md overflow-hidden">
          {news.length > 1 ? (
            <img
              src={news[1].image}
              className="h-full group-hover:scale-105 duration-500 w-full object-cover"
              alt={news[1].title}
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
        <p className="mt-2 font-semibold text-gray-500">
          {news.length > 1 ? news[1].date : <Skeleton width={100} />}
        </p>
        <p className="group-hover:text-red-500 duration-300 font-semibold">
          {news.length > 1 ? news[1].title : <Skeleton count={2} />}
        </p>
      </div>

      {/* Bottom Grid (Displaying news from index 2 to 5) */}
      <div className="grid grid-cols-2 gap-3 md:gap-5 p-2">
        {Array.isArray(news) && news.length > 2
          ? news.slice(2, 6).map((item: any, index: number) => (
              <div
                key={index}
                className="h-full  cursor-pointer group flex flex-col"
                onClick={() => navigate(`/news/${item._id}`)} // Navigate on click
              >
                <div className="flex-1 bg-lime-500 max-h-[300px] group rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                    alt={item.title}
                  />
                </div>
                <p className="mt-2 font-semibold text-gray-500">
                  {item.date || "Unknown Date"}
                </p>
                <p className="text-sm font-semibold group-hover:text-red-500 duration-300">
                  {item.title}
                </p>
              </div>
            ))
          : // Show skeleton placeholders while loading
            Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="h-full group flex flex-col">
                  <div className="flex-1 bg-gray-300 min-h-40 group rounded-md overflow-hidden">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <p className="mt-2 font-semibold text-gray-500">
                    {" "}
                    <Skeleton className="h-full w-full" />
                  </p>
                  <p className="text-sm font-semibold">
                    {" "}
                    <Skeleton className="h-full w-full" />
                  </p>
                </div>
              ))}
      </div>
    </div>
  );
};

export const ThirdSection = () => {
  const [sportsNews, setSportsNews] = useState<NewsTypes[]>([]);
  const [techNews, setTechNews] = useState<NewsTypes[]>([]);
  const [generalNews, setGeneralNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async (
      url: string,
      setter: (data: NewsTypes[]) => void
    ) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data.posts);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews(
      "https://richapi.vercel.app/post-category/Sports",
      setSportsNews
    );
    fetchNews(
      "https://richapi.vercel.app/post-category/HomePage",
      setGeneralNews
    );
    fetchNews(
      "https://richapi.vercel.app/post-category/Featured",
      setTechNews
    );
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4  md:gap-10 sm:grid-cols-2 md:grid-cols-3  md:px-10 my-5 md:my-10">
      {/* Sports  */}
      <div className="">
        <p className="text-2xl font-semibold my-4">Sports</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div className=" group  flex  flex-col w-full">
            <div
              className="cursor-pointer rounded-lg overflow-hidden h-full w-full"
              onClick={() =>
                sportsNews.length > 0 && navigate(`/news/${sportsNews[0]._id}`)
              }
            >
              {sportsNews.length > 0 ? (
                <img
                  src={sportsNews[0].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={sportsNews[0].title}
                />
              ) : (
                <Skeleton className="w-full  h-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {sportsNews.length > 0 ? (
                sportsNews[0]?.date
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {sportsNews.length > 0 ? (
                sportsNews[0]?.title
              ) : (
                <Skeleton className="w-full  h-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(sportsNews) &&
              sportsNews.slice(2, 9).map((item: any, index: number) => (
                <div
                  onClick={() => navigate(`/news/${item._id}`)}
                  key={index}
                  className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold group-hover:text-red-500 duration-300   h-fit  w-fit flex-wrap ">
                    {item.title}
                  </p>
                  <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
                    <img
                      src={item.image}
                      className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold outline-none items-center gap-2"
                to={"/sport"}
              >
                Go to Sports{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* News   */}

      <div className="">
        <p className="text-2xl font-semibold my-4">General</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div className=" group  flex cursor-pointer  flex-col w-full">
            <div
              className="cursor-pointer rounded-lg overflow-hidden h-full w-full"
              onClick={() =>
                generalNews.length > 0 &&
                navigate(`/news/${generalNews[1]._id}`)
              }
            >
              {generalNews.length > 0 ? (
                <img
                  src={generalNews[1].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={generalNews[1].title}
                />
              ) : (
                <Skeleton className="w-full  h-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {generalNews.length > 0 ? (
                generalNews[1]?.date
              ) : (
                <Skeleton className="w-fit h-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {generalNews.length > 0 ? (
                generalNews[1]?.title
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(generalNews) &&
              generalNews.slice(2, 9).map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => navigate(`/news/${item._id}`)}
                  className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold group-hover:text-red-500 duration-300   h-fit  w-fit flex-wrap ">
                    {item.title}
                  </p>
                  <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
                    <img
                      src={item.image}
                      className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold outline-none items-center gap-2"
                to={"/general"}
              >
                Go to general{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Science */}
      <div className="">
        <p className="text-2xl font-semibold my-4">Feature</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div className=" group  flex  flex-col w-full">
            <div
              className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
              onClick={() =>
                techNews.length > 0 && navigate(`/news/${techNews[0]._id}`)
              }
            >
              {techNews.length > 0 ? (
                <img
                  src={techNews[0].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={techNews[0].title}
                />
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {techNews.length > 0 ? (
                techNews[0]?.date
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {techNews.length > 0 ? (
                techNews[0]?.title
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(techNews) &&
              techNews.slice(1, 8).map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => navigate(`/news/${item._id}`)}
                  className="h-[150px] md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold  h-fit  w-fit flex-wrap ">
                    {item.title}
                  </p>
                  <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover"
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}

            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold items-center gap-2"
                to={"/polities"}
              >
                Go to Feature{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditorsChoice = () => {
  const [warNews, setWarNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWarNews = async () => {
      try {
        const response = await fetch(
          "https://richapi.vercel.app/post/2ab36b15-fdf4-4a88-b05f-b6d96c71cabf"
        );
        const data = await response.json();
        setWarNews(data);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };

    fetchWarNews();
  }, []);

  return (
    <div className="md:h-screen w-full my-5  gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div
        className=" flex  flex-col group cursor-pointer p-4 gap-4"
        onClick={() =>
          warNews.length > 0 && navigate(`/news/${warNews[0]._id}`)
        }
      >
        <div className="flex-1  bg-blue-600 rounded-md overflow-hidden">
          {warNews.length > 0 ? (
            <img
              src={warNews[0]?.image}
              className="h-full group-hover:scale-105 duration-500 w-full object-cover"
              alt={warNews[0]?.title}
            />
          ) : (
            <Skeleton className="w-full  h-full" />
          )}
        </div>
        <p className="mt-2 font-semibold">
          {warNews.length > 0 ? (
            warNews[0]?.date
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </p>

        <p className="group-hover:text-red-500 duration-300 font-semibold">
          {warNews.length > 0 ? (
            warNews[0]?.content.slice(0, 200)
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </p>
      </div>

      <div className=" flex flex-col h-full gap-3  md:gap-5 p-2">
        {Array.isArray(warNews) &&
          warNews.slice(1, 5).map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => navigate(`/news/${item._id}`)}
              className="md:h-fit flex-1 group flex    w-full cursor-pointer "
            >
              <div className=" md:max-h-40 h-[160px]  md:h-full bg-lime-500  w-[350px] md:w-[60%] rounded-md overflow-hidden">
                <img
                  src={item?.image}
                  className="h-full w-full group-hover:scale-105 duration-500 object-cover"
                  alt={item?.title}
                />
              </div>
              <div className="px-2  h-full flex flex-col justify-between">
                <p className=" font-semibold group-hover:text-red-500 duration-300">
                  {item?.title}
                </p>
                <p className=" font-semibold text-gray-600">{item?.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export const LastSection = () => {
  const [economyNews, setEconomyNews] = useState<NewsTypes[]>([]);
  const [europeNews, setEuropeNews] = useState<NewsTypes[]>([]);
  const [featuresNews, setFeaturesNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEconomyNews = async () => {
      try {
        const response = await fetch(
          "https://richapi.vercel.app/post/f7ca96e7-3246-41b9-ad21-ad70w4534346"
        );
        const data = await response.json();
        setEconomyNews(data);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };
    const fetchEuropeNews = async () => {
      try {
        const response = await fetch(
          "https://richapi.vercel.app/post/f7ca96e7-958a-41b9-ad21-ad7059396286"
        );
        const data = await response.json();
        setEuropeNews(data);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };
    const fetchFeaturesNews = async () => {
      try {
        const response = await fetch(
          "https://richapi.vercel.app/post/f7ca96e7-958a-41b9-ad21-ad7059588290"
        );
        const data = await response.json();
        setFeaturesNews(data);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };

    fetchEuropeNews();
    fetchEconomyNews();
    fetchFeaturesNews();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4   md:gap-10 sm:grid-cols-2 md:grid-cols-3  md:px-10 my-5 md:mt-20">
      {/* Business  */}
      <div className="">
        <p className="text-2xl font-semibold my-4">Economy</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div className=" group  flex  flex-col w-full">
            <div
              className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
              onClick={() =>
                economyNews.length > 0 &&
                navigate(`/news/${economyNews[0]._id}`)
              }
            >
              {economyNews.length > 0 ? (
                <img
                  src={economyNews[0].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={economyNews[0].title}
                />
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {economyNews.length > 0 ? (
                economyNews[0]?.date
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {economyNews.length > 0 ? (
                economyNews[0]?.title
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(economyNews) &&
              economyNews.slice(1, 4).map((item: any, index: number) => (
                <div
                  onClick={() => navigate(`/news/${item._id}`)}
                  key={index}
                  className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
                    {economyNews.length > 0 ? (
                      item?.title
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </p>
                  <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
                    {economyNews.length > 0 ? (
                      <img
                        src={item?.image}
                        className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                        alt={item.title}
                      />
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </div>
                </div>
              ))}
            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold items-center gap-2"
                to={"/economy"}
              >
                Go to Economy{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-400 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Business */}

      <div className="">
        <p className="text-2xl font-semibold my-4">Business</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div
            className=" group  flex  flex-col w-full"
            onClick={() =>
              europeNews.length > 0 && navigate(`/news/${europeNews[0]._id}`)
            }
          >
            <div className=" cursor-pointer rounded-lg overflow-hidden h-full w-full">
              {europeNews.length > 0 ? (
                <img
                  src={europeNews[0].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={europeNews[0].title}
                />
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {europeNews.length > 0 ? (
                europeNews[0]?.date
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {europeNews.length > 0 ? (
                europeNews[0]?.title
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(europeNews) &&
              europeNews.slice(1, 4).map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => navigate(`/news/${item._id}`)}
                  className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
                    {europeNews.length > 0 ? (
                      item?.title
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </p>
                  <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
                    {europeNews.length > 0 ? (
                      <img
                        src={item?.image}
                        className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                        alt={item.title}
                      />
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </div>
                </div>
              ))}
            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold items-center gap-2"
                to={"/business"}
              >
                Go to Business{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-500 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="">
        <p className="text-2xl font-semibold my-4">Features</p>
        <div className="grid  grid-rows-[357px_1fr]">
          <div className=" group  flex  flex-col w-full">
            <div
              className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
              onClick={() =>
                featuresNews.length > 0 &&
                navigate(`/news/${featuresNews[0]._id}`)
              }
            >
              {featuresNews.length > 0 ? (
                <img
                  src={featuresNews[0].image}
                  className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                  alt={featuresNews[0].title}
                />
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </div>

            <p className="mt-2 text-sm font-semibold">
              {featuresNews.length > 0 ? (
                featuresNews[0]?.date
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
            <p className="group-hover:text-red-500 duration-300 font-semibold">
              {featuresNews.length > 0 ? (
                featuresNews[0]?.title
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {Array.isArray(featuresNews) &&
              featuresNews.slice(1, 4).map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => navigate(`/news/${item._id}`)}
                  className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
                >
                  <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
                    {featuresNews.length > 0 ? (
                      item?.title
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </p>
                  <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
                    {featuresNews.length > 0 ? (
                      <img
                        src={item?.image}
                        className="h-full group-hover:scale-105 duration-500 w-full object-cover"
                        alt={item.title}
                      />
                    ) : (
                      <Skeleton className="h-full w-full" />
                    )}
                  </div>
                </div>
              ))}

            <div className="justify-end flex group h-fit">
              <Link
                className=" w-fit flex  text-sm font-semibold items-center outline-none gap-2"
                to={"/features"}
              >
                Go to Features{" "}
                <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-500 group-hover:text-black p-1 rounded-full bg-black text-white">
                  {" "}
                  <FaArrowRight />{" "}
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 md:grid-cols-10 bg-black text-white p-5">
      <div>
        
      </div>
    </div>
  );
};
