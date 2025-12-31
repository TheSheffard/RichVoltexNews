import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdSense from "../Components/AdSense";

type NewsType = {
    _id: string;
    categoryId: string;
    title: string;
    link: string;
    desc: string;
    image: string;
    secImage?: string;
    date: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export const NewsDetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState<NewsType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            try {
                const response = await fetch(`https://punchscrapper.onrender.com/news/${id}`);
                if (!response.ok) throw new Error("Failed to fetch news");

                const data = await response.json();

                if (response.ok) {
                    if (data) {
                        setNews(data.newsItem);
                    } else {
                        throw new Error("News not found");

                    }

                } else {
                    throw new Error("Invalid data format");

                }

            } catch (error: any) {
                setError(error.message);
                console.error("Error fetching news details:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetails();
    }, [id]);

    if (loading) return <p className="text-center text-xl font-semibold mt-10">Loading please wait...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (!news) return <p className="text-center mt-10">News not found.</p>;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <AdSense adSlot="3891595190" />

            {news.image && <img src={news.image} alt={news.title} className="w-full h-fit object-cover rounded-md" />}
            <AdSense adSlot="3891595190" />

            <h1 className="text-3xl font-bold mt-4">{news.title}</h1>
            <AdSense adSlot="3891595190" />

            <p className="text-sm text-gray-500">{news.date}</p>
            <AdSense adSlot="3891595190" />

            <p className="mt-4 text-gray-700">{news.content}</p>
            <AdSense adSlot="3891595190" />


        </div>
    );
};
