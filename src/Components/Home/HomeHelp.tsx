// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { useNavigate } from "react-router-dom";



// type NewsTypes = {
//   _id: string;
//   categoryId: string;
//   categoryName: string;
//   title: string;
//   image: string;
//   date: string;
//   content: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// export const HomeHero = () => {
//   const [news, setNews] = useState<any[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTodayNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/Lite"
//         );
//         const data = await response.json();

//         if (response.ok) {
//           if (data) {
//             console.log(data)
//             setNews(data.newsItem);

//           }
//         } else {
//           throw new Error("Error occurred");

//         }

//       } catch (error: any) {
//         console.error("Error fetching news:", error.message);
//       }
//     };

//     fetchTodayNews();
//   }, []);

//   const handleNavigate = (id: string) => {
//     navigate(`/news/${id}`);
//   };

//   return (
//     <div
//       className="grid grid-cols-1 group cursor-pointer mb-8 rounded-md md:grid-cols-2 gap-3 items-center h-full md:h-[70vh]"
//       onClick={() => news?.length > 0 && handleNavigate(news[0]._id)}
//     >
//       <div className="md:px-5 flex flex-col gap-3">
//         {news?.length > 0 && (
//           <h1 className="bg-indigo-900 w-fit rounded text-white py-1 px-3 text-sm">
//             News
//           </h1>
//         )}
//         <p className="text-xl md:text-3xl font-semibold group-hover:text-red-500 duration-300">
//           {news?.length > 0 ? news[0].title : <Skeleton />}
//         </p>
//         <p className="font-semibold text-base group-hover:text-red-500 duration-300">
//           {news?.length > 0 ? (
//             news[0].content.slice(0, 200) + "...."
//           ) : (
//             <Skeleton count={2} className="h-full w-full" />
//           )}
//         </p>
//       </div>
//       <div className="w-full h-[60vh] md:h-full overflow-hidden rounded-md">
//         {news.length > 0 ? (
//           <img
//             src={news[0].image}
//             alt={news[0].title}
//             className="w-full cursor-pointer group-hover:scale-110 duration-500 h-full object-cover rounded-md"
//           />
//         ) : (
//           <Skeleton className="w-full h-full" />
//         )}
//       </div>
//     </div>
//   );
// };

// export const TopNews = () => {
//   const [news, setNews] = useState<NewsTypes[]>([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const fetchTodayNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/News"
//         );
//         const data = await response.json();
//         setNews(data.newsItem);
//       } catch (error: any) {
//         console.error("Error fetching news:", error.message);
//       }
//     };

//     fetchTodayNews();
//   }, []);

//   return (
//     <div className="md:h-screen w-full gap-4 mx-auto my-12 md:my-36 grid grid-cols-1 md:grid-cols-2">
//       {/* Top Image (Displaying news[1]) */}
//       <div
//         className="flex group cursor-pointer flex-col shadow-md p-4 gap-4"
//         onClick={() => news.length > 1 && navigate(`/news/${news[1]._id}`)} // Navigate on click
//       >
//         <div className="flex-1 max-h-[550px] bg-blue-600 rounded-md overflow-hidden">
//           {news.length > 1 ? (
//             <img
//               src={news[1].image}
//               className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//               alt={news[1].title}
//             />
//           ) : (
//             <Skeleton className="w-full h-full" />
//           )}
//         </div>
//         <p className="mt-2 font-semibold text-gray-500">
//           {news.length > 1 ? news[1].date : <Skeleton width={100} />}
//         </p>
//         <p className="group-hover:text-red-500 duration-300 font-semibold">
//           {news.length > 1 ? news[1].title : <Skeleton count={2} />}
//         </p>
//       </div>

//       {/* Bottom Grid (Displaying news from index 2 to 5) */}
//       <div className="grid grid-cols-2 gap-3 md:gap-5 p-2">
//         {Array.isArray(news) && news.length > 2
//           ? news.slice(2, 6).map((item: any, index: number) => (
//             <div
//               key={index}
//               className="h-full  cursor-pointer group flex flex-col"
//               onClick={() => navigate(`/news/${item._id}`)} // Navigate on click
//             >
//               <div className="flex-1 bg-lime-500 max-h-[300px] group rounded-md overflow-hidden">
//                 <img
//                   src={item.image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={item.title}
//                 />
//               </div>
//               <p className="mt-2 font-semibold text-gray-500">
//                 {item.date || "Unknown Date"}
//               </p>
//               <p className="text-sm font-semibold group-hover:text-red-500 duration-300">
//                 {item.title}
//               </p>
//             </div>
//           ))
//           : // Show skeleton placeholders while loading
//           Array(4)
//             .fill(0)
//             .map((_, index) => (
//               <div key={index} className="h-full group flex flex-col">
//                 <div className="flex-1 bg-gray-300 min-h-40 group rounded-md overflow-hidden">
//                   <Skeleton className="w-full h-full" />
//                 </div>
//                 <p className="mt-2 font-semibold text-gray-500">
//                   {" "}
//                   <Skeleton className="h-full w-full" />
//                 </p>
//                 <p className="text-sm font-semibold">
//                   {" "}
//                   <Skeleton className="h-full w-full" />
//                 </p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export const ThirdSection = () => {
//   const [sportsNews, setSportsNews] = useState<NewsTypes[]>([]);
//   const [techNews, setTechNews] = useState<NewsTypes[]>([]);
//   const [generalNews, setGeneralNews] = useState<NewsTypes[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNews = async (
//       url: string,
//       setter: (data: NewsTypes[]) => void
//     ) => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();




//         setter(data.newsItem);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews("https://punchscrapper.onrender.com/post/Sports", setSportsNews);
//     fetchNews("https://punchscrapper.onrender.com/post/Lite", setGeneralNews);
//     fetchNews("https://punchscrapper.onrender.com/post/Featured", setTechNews);
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-4  md:gap-10 sm:grid-cols-2 md:grid-cols-3  md:px-10 my-5 md:my-10">
//       {/* Sports  */}
//       <div className="">
//         <p className="text-2xl font-semibold my-4">Sports</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div className=" group  flex  flex-col w-full">
//             <div
//               className="cursor-pointer rounded-lg overflow-hidden h-full w-full"
//               onClick={() =>
//                 sportsNews.length > 0 && navigate(`/news/${sportsNews[0]._id}`)
//               }
//             >
//               {sportsNews.length > 0 ? (
//                 <img
//                   src={sportsNews[0].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={sportsNews[0].title}
//                 />
//               ) : (
//                 <Skeleton className="w-full  h-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {sportsNews.length > 0 ? (
//                 sportsNews[0]?.date
//               ) : (
//                 <Skeleton className="w-full h-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {sportsNews.length > 0 ? (
//                 sportsNews[0]?.title
//               ) : (
//                 <Skeleton className="w-full  h-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(sportsNews) &&
//               sportsNews.slice(2, 9).map((item: any, index: number) => (
//                 <div
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   key={index}
//                   className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold group-hover:text-red-500 duration-300   h-fit  w-fit flex-wrap ">
//                     {item.title}
//                   </p>
//                   <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
//                     <img
//                       src={item.image}
//                       className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                       alt={item.title}
//                     />
//                   </div>
//                 </div>
//               ))}
//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold outline-none items-center gap-2"
//                 to={"/sport"}
//               >
//                 Go to Sports{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* News   */}

//       <div className="">
//         <p className="text-2xl font-semibold my-4">General</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div className=" group  flex cursor-pointer  flex-col w-full">
//             <div
//               className="cursor-pointer rounded-lg overflow-hidden h-full w-full"
//               onClick={() =>
//                 generalNews.length > 0 &&
//                 navigate(`/news/${generalNews[1]._id}`)
//               }
//             >
//               {generalNews?.length > 0 ? (
//                 <img
//                   src={generalNews[1].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={generalNews[1].title}
//                 />
//               ) : (
//                 <Skeleton className="w-full  h-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {generalNews?.length > 0 ? (
//                 generalNews[1]?.date
//               ) : (
//                 <Skeleton className="w-fit h-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {generalNews?.length > 0 ? (
//                 generalNews[1]?.title
//               ) : (
//                 <Skeleton className="w-full h-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(generalNews) &&
//               generalNews.slice(2, 9).map((item: any, index: number) => (
//                 <div
//                   key={index}
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold group-hover:text-red-500 duration-300   h-fit  w-fit flex-wrap ">
//                     {item.title}
//                   </p>
//                   <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
//                     <img
//                       src={item.image}
//                       className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                       alt={item.title}
//                     />
//                   </div>
//                 </div>
//               ))}
//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold outline-none items-center gap-2"
//                 to={"/general"}
//               >
//                 Go to general{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Science */}
//       <div className="">
//         <p className="text-2xl font-semibold my-4">Feature</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div className=" group  flex  flex-col w-full">
//             <div
//               className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
//               onClick={() =>
//                 techNews.length > 0 && navigate(`/news/${techNews[0]._id}`)
//               }
//             >
//               {techNews.length > 0 ? (
//                 <img
//                   src={techNews[0].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={techNews[0].title}
//                 />
//               ) : (
//                 <Skeleton className="w-full h-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {techNews.length > 0 ? (
//                 techNews[0]?.date
//               ) : (
//                 <Skeleton className="w-full h-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {techNews.length > 0 ? (
//                 techNews[0]?.title
//               ) : (
//                 <Skeleton className="w-full h-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(techNews) &&
//               techNews.slice(1, 8).map((item: any, index: number) => (
//                 <div
//                   key={index}
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   className="h-[150px] md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold  h-fit  w-fit flex-wrap ">
//                     {item.title}
//                   </p>
//                   <div className="bg-red-500 rounded-md overflow-hidden w-[70%] h-full">
//                     <img
//                       src={item.image}
//                       className="h-full w-full object-cover"
//                       alt={item.title}
//                     />
//                   </div>
//                 </div>
//               ))}

//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold items-center gap-2"
//                 to={"/polities"}
//               >
//                 Go to Feature{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-lime-300 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const EditorsChoice = () => {
//   const [warNews, setWarNews] = useState<NewsTypes[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchWarNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/News"
//         );
//         const data = await response.json();
//         setWarNews(data.newsItem);
//       } catch (error) {
//         console.error("Error fetching sports news:", error);
//       }
//     };

//     fetchWarNews();
//   }, []);

//   return (
//     <div className=" w-full my-5  gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
//       <div
//         className=" flex h-full  flex-col group cursor-pointer p-4 gap-4"
//         onClick={() =>
//           warNews.length > 0 && navigate(`/news/${warNews[0]._id}`)
//         }
//       >
//         <div className="flex-1 max-h-[500px]  bg-blue-600 rounded-md overflow-hidden">
//           {warNews.length > 0 ? (
//             <img
//               src={warNews[0]?.image}
//               className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//               alt={warNews[0]?.title}
//             />
//           ) : (
//             <Skeleton className="w-full  h-full" />
//           )}
//         </div>
//         <p className="mt-2 font-semibold">
//           {warNews.length > 0 ? (
//             warNews[0]?.date
//           ) : (
//             <Skeleton className="w-full h-full" />
//           )}
//         </p>

//         <p className="group-hover:text-red-500 duration-300 font-semibold">
//           {warNews.length > 0 ? (
//             warNews[0]?.content.slice(0, 200)
//           ) : (
//             <Skeleton className="w-full h-full" />
//           )}
//         </p>
//       </div>

//       <div className=" flex flex-col h-full gap-3  md:gap-5 p-2">
//         {Array.isArray(warNews) &&
//           warNews.slice(1, 5).map((item: any, index: number) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/news/${item._id}`)}
//               className="md:h-fit flex-1 group flex    w-full cursor-pointer "
//             >
//               <div className=" md:max-h-40 h-[160px]  md:h-full bg-lime-500  w-[350px] md:w-[60%] rounded-md overflow-hidden">
//                 <img
//                   src={item?.image}
//                   className="h-full w-full group-hover:scale-105 duration-500 object-cover"
//                   alt={item?.title}
//                 />
//               </div>
//               <div className="px-2  h-full flex flex-col justify-between">
//                 <p className=" font-semibold group-hover:text-red-500 duration-300">
//                   {item?.title}
//                 </p>
//                 <p className=" font-semibold text-gray-600">{item?.date}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };
// export const LastSection = () => {
//   const [economyNews, setEconomyNews] = useState<NewsTypes[]>([]);
//   const [europeNews, setEuropeNews] = useState<NewsTypes[]>([]);
//   const [featuresNews, setFeaturesNews] = useState<NewsTypes[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEconomyNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/Business"
//         );
//         const data = await response.json();
//         setEconomyNews(data.newsItem);
//       } catch (error) {
//         console.error("Error fetching sports news:", error);
//       }
//     };
//     const fetchEuropeNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/Politics"
//         );
//         const data = await response.json();
//         setEuropeNews(data.newsItem);
//       } catch (error) {
//         console.error("Error fetching sports news:", error);
//       }
//     };
//     const fetchFeaturesNews = async () => {
//       try {
//         const response = await fetch(
//           "https://punchscrapper.onrender.com/post/Featured"
//         );
//         const data = await response.json();
//         setFeaturesNews(data.newsItem);
//       } catch (error) {
//         console.error("Error fetching sports news:", error);
//       }
//     };

//     fetchEuropeNews();
//     fetchEconomyNews();
//     fetchFeaturesNews();
//   }, []);
//   return (
//     <div className="grid grid-cols-1 gap-4 md:my-36   md:gap-10 sm:grid-cols-2 md:grid-cols-3  md:px-10 my-5 md:mt-20">
//       {/* Business  */}
//       <div className="">
//         <p className="text-2xl font-semibold my-4">Economy</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div className=" group  flex  flex-col w-full">
//             <div
//               className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
//               onClick={() =>
//                 economyNews.length > 0 &&
//                 navigate(`/news/${economyNews[0]._id}`)
//               }
//             >
//               {economyNews.length > 0 ? (
//                 <img
//                   src={economyNews[0].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={economyNews[0].title}
//                 />
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {economyNews.length > 0 ? (
//                 economyNews[0]?.date
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {economyNews.length > 0 ? (
//                 economyNews[0]?.title
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(economyNews) &&
//               economyNews.slice(1, 7).map((item: any, index: number) => (
//                 <div
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   key={index}
//                   className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
//                     {economyNews.length > 0 ? (
//                       item?.title
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </p>
//                   <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
//                     {economyNews.length > 0 ? (
//                       <img
//                         src={item?.image}
//                         className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                         alt={item.title}
//                       />
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </div>
//                 </div>
//               ))}
//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold items-center gap-2"
//                 to={"/economy"}
//               >
//                 Go to Economy{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-400 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Business */}

//       <div className="">
//         <p className="text-2xl font-semibold my-4">Business</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div
//             className=" group  flex  flex-col w-full"
//             onClick={() =>
//               europeNews.length > 0 && navigate(`/news/${europeNews[0]._id}`)
//             }
//           >
//             <div className=" cursor-pointer rounded-lg overflow-hidden h-full w-full">
//               {europeNews.length > 0 ? (
//                 <img
//                   src={europeNews[0].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={europeNews[0].title}
//                 />
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {europeNews.length > 0 ? (
//                 europeNews[0]?.date
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {europeNews.length > 0 ? (
//                 europeNews[0]?.title
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(europeNews) &&
//               europeNews.slice(1, 7).map((item: any, index: number) => (
//                 <div
//                   key={index}
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
//                     {europeNews.length > 0 ? (
//                       item?.title
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </p>
//                   <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
//                     {europeNews.length > 0 ? (
//                       <img
//                         src={item?.image}
//                         className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                         alt={item.title}
//                       />
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </div>
//                 </div>
//               ))}
//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold items-center gap-2"
//                 to={"/business"}
//               >
//                 Go to Business{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-500 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Features */}
//       <div className="">
//         <p className="text-2xl font-semibold my-4">Features</p>
//         <div className="grid  grid-rows-[357px_1fr]">
//           <div className=" group  flex  flex-col w-full">
//             <div
//               className=" cursor-pointer rounded-lg overflow-hidden h-full w-full"
//               onClick={() =>
//                 featuresNews.length > 0 &&
//                 navigate(`/news/${featuresNews[0]._id}`)
//               }
//             >
//               {featuresNews.length > 0 ? (
//                 <img
//                   src={featuresNews[0].image}
//                   className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                   alt={featuresNews[0].title}
//                 />
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </div>

//             <p className="mt-2 text-sm font-semibold">
//               {featuresNews.length > 0 ? (
//                 featuresNews[0]?.date
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//             <p className="group-hover:text-red-500 duration-300 font-semibold">
//               {featuresNews.length > 0 ? (
//                 featuresNews[0]?.title
//               ) : (
//                 <Skeleton className="h-full w-full" />
//               )}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-col gap-4">
//             {Array.isArray(featuresNews) &&
//               featuresNews.slice(1, 7).map((item: any, index: number) => (
//                 <div
//                   key={index}
//                   onClick={() => navigate(`/news/${item._id}`)}
//                   className="h-[150px] group md:h-[120px] w-full cursor-pointer flex items-center"
//                 >
//                   <p className="font-semibold group-hover:text-red-500 duration-300 h-fit  w-fit flex-wrap ">
//                     {featuresNews.length > 0 ? (
//                       item?.title
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </p>
//                   <div className="bg-red-500  rounded-md overflow-hidden w-[70%] h-full">
//                     {featuresNews.length > 0 ? (
//                       <img
//                         src={item?.image}
//                         className="h-full group-hover:scale-105 duration-500 w-full object-cover"
//                         alt={item.title}
//                       />
//                     ) : (
//                       <Skeleton className="h-full w-full" />
//                     )}
//                   </div>
//                 </div>
//               ))}

//             <div className="justify-end flex group h-fit">
//               <Link
//                 className=" w-fit flex  text-sm font-semibold items-center outline-none gap-2"
//                 to={"/features"}
//               >
//                 Go to Features{" "}
//                 <i className="border group-hover:translate-x-1 duration-200 group-hover:bg-red-500 group-hover:text-black p-1 rounded-full bg-black text-white">
//                   {" "}
//                   <FaArrowRight />{" "}
//                 </i>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Footer = () => {
//   return (
//     <div className="grid grid-cols-3 gap-5 md:grid-cols-10 bg-black text-white p-5">
//       <div></div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight,  FaClock } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

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

// Enhanced Category Badge Component
const CategoryBadge = ({ category, color = "bg-gradient-to-r from-blue-600 to-purple-600" }: { category: string; color?: string }) => (
  <span className={`${color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
    {category}
  </span>
);

// Enhanced News Card Component
const NewsCard = ({ news, size = "medium", showExcerpt = true }: { news: NewsTypes; size?: "small" | "medium" | "large"; showExcerpt?: boolean }) => {
  const navigate = useNavigate();
  
  const sizeClasses = {
    small: "h-48",
    medium: "h-64",
    large: "h-80"
  };

  const titleSizes = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-2xl"
  };

  return (
    <div 
      className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
      onClick={() => navigate(`/news/${news._id}`)}
    >
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={news.categoryName} />
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <FaClock className="text-white/80" />
            <span>{news.date}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 ${titleSizes[size]} line-clamp-3`}>
          {news.title}
        </h3>
        {showExcerpt && (
          <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
            {news.content.slice(0, 120)}...
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            {news.date}
          </span>
        
        </div>
      </div>
    </div>
  );
};

export const HomeHero = () => {
  const [news, setNews] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodayNews = async () => {
      try {
        const response = await fetch("https://punchscrapper.onrender.com/post/Lite");
        const data = await response.json();
        if (response.ok && data) {
          setNews(data.newsItem);
        }
      } catch (error: any) {
        console.error("Error fetching news:", error.message);
      }
    };
    fetchTodayNews();
  }, []);

  if (news.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Section Skeleton */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Category Badge Skeleton */}
              <Skeleton 
                width={140} 
                height={32} 
                className="rounded-full" 
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
              />
              
              {/* Title Skeleton */}
              <div className="space-y-4">
                <Skeleton 
                  height={32} 
                  className="rounded-lg w-full" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <Skeleton 
                  height={32} 
                  className="rounded-lg w-4/5" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <Skeleton 
                  height={32} 
                  className="rounded-lg w-3/4" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
              </div>
              
              {/* Content Skeleton */}
              <div className="space-y-3">
                <Skeleton 
                  height={20} 
                  className="rounded-lg w-full" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <Skeleton 
                  height={20} 
                  className="rounded-lg w-full" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <Skeleton 
                  height={20} 
                  className="rounded-lg w-2/3" 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
              </div>
            </div>
            
            {/* Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton 
                height={56} 
                width={200} 
                className="rounded-full" 
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
              />
              <Skeleton 
                height={56} 
                width={180} 
                className="rounded-full" 
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
              />
            </div>

            {/* Quick Stats Skeleton */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              {[1, 2, 3].map((item) => (
                <div key={item} className="text-center">
                  <Skeleton 
                    height={32} 
                    width={80} 
                    className="rounded-lg mx-auto mb-2" 
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <Skeleton 
                    height={16} 
                    width={60} 
                    className="rounded-lg mx-auto" 
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Section Skeleton */}
          <div className="relative">
            {/* Main Image Skeleton */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Skeleton 
                height={600} 
                className="w-full" 
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
              />
            </div>
            
            {/* Floating Element Skeleton */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <Skeleton 
                  width={48} 
                  height={48} 
                  circle 
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <div className="space-y-2">
                  <Skeleton 
                    height={16} 
                    width={80} 
                    className="rounded-lg" 
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <Skeleton 
                    height={20} 
                    width={100} 
                    className="rounded-lg" 
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const featuredNews = news[0];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <CategoryBadge category="Breaking News" color="bg-gradient-to-r from-red-500 to-orange-500" />
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {featuredNews.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {featuredNews.content.slice(0, 200)}...
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate(`/news/${featuredNews._id}`)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Read Full Story
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-500">Daily Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-500">News Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-500">Trusted Sources</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <FaClock className="text-white text-lg" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Published</div>
                <div className="font-semibold text-gray-900">
                  {featuredNews.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TopNews = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodayNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://punchscrapper.onrender.com/post/News");
        const data = await response.json();
        setNews(data.newsItem);
      } catch (error: any) {
        console.error("Error fetching news:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodayNews();
  }, []);

  // Loading state
  if (isLoading || news.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <Skeleton 
              height={60} 
              width={300} 
              className="mx-auto mb-4 rounded-lg"
              baseColor="#e2e8f0"
              highlightColor="#f1f5f9"
            />
            <Skeleton 
              height={24} 
              width={400} 
              className="mx-auto rounded-lg"
              baseColor="#e2e8f0"
              highlightColor="#f1f5f9"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Story Skeleton */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Skeleton 
                  height={500} 
                  className="w-full rounded-3xl"
                  baseColor="#e2e8f0"
                  highlightColor="#f1f5f9"
                />
                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  <Skeleton 
                    height={32} 
                    width={120} 
                    className="rounded-full"
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <Skeleton 
                    height={28} 
                    className="w-full rounded-lg"
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <Skeleton 
                    height={20} 
                    className="w-3/4 rounded-lg"
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <div className="flex gap-4 mt-4">
                    <Skeleton 
                      height={16} 
                      width={80} 
                      className="rounded-lg"
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                    <Skeleton 
                      height={16} 
                      width={80} 
                      className="rounded-lg"
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Stories Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <Skeleton 
                    height={192} 
                    className="w-full"
                    baseColor="#e2e8f0"
                    highlightColor="#f1f5f9"
                  />
                  <div className="p-4 space-y-3">
                    <Skeleton 
                      height={16} 
                      width={80} 
                      className="rounded-lg"
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                    <Skeleton 
                      height={20} 
                      className="w-full rounded-lg"
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                    <Skeleton 
                      height={16} 
                      className="w-2/3 rounded-lg"
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Top Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the most important news and updates from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Story */}
          {news.length > 1 && (
            <div className="group cursor-pointer" onClick={() => navigate(`/news/${news[1]._id}`)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={news[1].image}
                  alt={news[1].title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <CategoryBadge category={news[1].categoryName} />
                  <h3 className="text-2xl font-bold mt-4 mb-2 line-clamp-3">
                    {news[1].title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {news[1].content.slice(0, 100)}...
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-sm opacity-90">{news[1].date}</span>
                    <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
                    <span className="text-sm opacity-90">5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid Stories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {news.slice(2, 6).map((item) => (
              <NewsCard key={item._id} news={item} size="small" showExcerpt={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export const ThirdSection = () => {
  const [sportsNews, setSportsNews] = useState<NewsTypes[]>([]);
  const [techNews, setTechNews] = useState<NewsTypes[]>([]);
  const [generalNews, setGeneralNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async (url: string, setter: (data: NewsTypes[]) => void) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data.newsItem);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews("https://punchscrapper.onrender.com/post/Sports", setSportsNews);
    fetchNews("https://punchscrapper.onrender.com/post/Lite", setGeneralNews);
    fetchNews("https://punchscrapper.onrender.com/post/Featured", setTechNews);
  }, []);

  const Section = ({ title, news, category, link }: { title: string; news: NewsTypes[]; category: string; link: string }) => (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <Link
          to={link}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
        >
          View All
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {news.length > 0 ? (
        <>
          <div 
            className="group cursor-pointer mb-8"
            onClick={() => navigate(`/news/${news[0]._id}`)}
          >
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <CategoryBadge category={category} />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {news[0].title}
            </h4>
            <p className="text-gray-500 text-sm mt-2">{news[0].date}</p>
          </div>

          <div className="space-y-6">
            {news.slice(1, 5).map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/news/${item._id}`)}
                className="group cursor-pointer flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 text-sm">
                    {item.title}
                  </h5>
                  <p className="text-gray-500 text-xs mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} height={80} className="rounded-xl" />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600">Dive deep into your favorite topics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Section title="Sports" news={sportsNews} category="Sports" link="/sports" />
          <Section title="General" news={generalNews} category="General" link="/general" />
          <Section title="Featured" news={techNews} category="Featured" link="/featured" />
        </div>
      </div>
    </section>
  );
};

export const EditorsChoice = () => {
  const [warNews, setWarNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWarNews = async () => {
      try {
        const response = await fetch("https://punchscrapper.onrender.com/post/News");
        const data = await response.json();
        setWarNews(data.newsItem);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };
    fetchWarNews();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Editor's Choice</h2>
          <p className="text-xl text-gray-300">Curated stories selected by our editorial team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Editor's Pick */}
          {warNews.length > 0 && (
            <div 
              className="group cursor-pointer"
              onClick={() => navigate(`/news/${warNews[0]._id}`)}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={warNews[0].image}
                  alt={warNews[0].title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <span>⭐</span>
                    Editor's Pick
                  </div>
                  <h3 className="text-3xl font-bold mb-4 line-clamp-3">
                    {warNews[0].title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed line-clamp-3">
                    {warNews[0].content.slice(0, 150)}...
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <span className="text-gray-300">{warNews[0].date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-300">Featured Story</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Side Stories */}
          <div className="space-y-6">
            {warNews.slice(1, 5).map((item, index) => (
              <div
                key={item._id}
                onClick={() => navigate(`/news/${item._id}`)}
                className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                      {item.content.slice(0, 80)}...
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-400">{item.date}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span className="text-xs text-gray-400">Must Read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LastSection = () => {
  const [economyNews, setEconomyNews] = useState<NewsTypes[]>([]);
  const [businessNews, setBusinessNews] = useState<NewsTypes[]>([]);
  const [featuresNews, setFeaturesNews] = useState<NewsTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEconomyNews = async () => {
      try {
        const response = await fetch("https://punchscrapper.onrender.com/post/Business");
        const data = await response.json();
        setEconomyNews(data.newsItem);
      } catch (error) {
        console.error("Error fetching economy news:", error);
      }
    };

    const fetchBusinessNews = async () => {
      try {
        const response = await fetch("https://punchscrapper.onrender.com/post/Politics");
        const data = await response.json();
        setBusinessNews(data.newsItem);
      } catch (error) {
        console.error("Error fetching business news:", error);
      }
    };

    const fetchFeaturesNews = async () => { 
      try {
        const response = await fetch("https://punchscrapper.onrender.com/post/Featured");
        const data = await response.json();
        setFeaturesNews(data.newsItem);
      } catch (error) {
        console.error("Error fetching features news:", error);
      }
    };

    fetchBusinessNews();
    fetchEconomyNews();
    fetchFeaturesNews();
  }, []);

  const CategorySection = ({ 
    title, 
    news, 
    category, 
    link, 
    gradient = "from-blue-500 to-purple-600",
    accentColor = "text-blue-600"
  }: { 
    title: string; 
    news: NewsTypes[]; 
    category: string; 
    link: string;
    gradient?: string;
    accentColor?: string;
  }) => (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className={`w-3 h-12 bg-gradient-to-r ${gradient} rounded-full`}></div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">Latest updates and insights</p>
          </div>
        </div>
        <Link
          to={link}
          className={`flex items-center gap-2 ${accentColor} hover:opacity-80 font-semibold group px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300`}
        >
          Explore
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Featured Story */}
      {news.length > 0 ? (
        <>
          <div 
            className="group cursor-pointer mb-8"
            onClick={() => navigate(`/news/${news[0]._id}`)}
          >
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <CategoryBadge category={category} color={`bg-gradient-to-r ${gradient}`} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
                  {news[0].title}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <FaClock className="text-sm" />
                  <span>{news[0].date}</span>
                  <span>•</span>
                  <span>Featured Story</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stories */}
          <div className="space-y-6">
            {news.slice(1, 6).map((item, index) => (
              <div
                key={item._id}
                onClick={() => navigate(`/news/${item._id}`)}
                className="group cursor-pointer flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-transparent hover:border-blue-100 transition-all duration-500"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h5 className={`font-semibold text-gray-900 group-hover:${accentColor} transition-colors duration-300 line-clamp-2 text-sm leading-tight`}>
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs text-gray-500">3 min read</span>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span>📈 Trending</span>
                <span>🔥 Hot Topics</span>
              </div>
              <span className="font-semibold">Updated recently</span>
            </div>
          </div>
        </>
      ) : (
        // Skeleton Loader
        <div className="space-y-6">
          {/* Featured Skeleton */}
          <div className="space-y-4">
            <Skeleton height={256} className="rounded-2xl" />
            <Skeleton height={24} className="rounded-lg" />
            <Skeleton height={16} className="rounded-lg w-3/4" />
          </div>
          
          {/* List Skeletons */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <Skeleton width={64} height={64} className="rounded-xl" />
              <div className="flex-1 space-y-2">
                <Skeleton height={16} className="rounded-lg" />
                <Skeleton height={12} className="rounded-lg w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600">LIVE UPDATES</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Market & Business</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead with real-time financial news, market trends, and business insights
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CategorySection 
            title="Economy" 
            news={economyNews} 
            category="Economy" 
            link="/economy"
            gradient="from-green-500 to-emerald-600"
            accentColor="text-green-600"
          />

          <CategorySection 
            title="Business" 
            news={businessNews} 
            category="Business" 
            link="/business"
            gradient="from-blue-500 to-cyan-600"
            accentColor="text-blue-600"
          />

          <CategorySection 
            title="Features" 
            news={featuresNews} 
            category="Features" 
            link="/features"
            gradient="from-purple-500 to-pink-600"
            accentColor="text-purple-600"
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed with Premium Content</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get access to exclusive analysis, in-depth reports, and expert opinions across all business sectors.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

