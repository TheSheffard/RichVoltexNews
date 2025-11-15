import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { NewsTypes } from "../../../Utils/Types";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NewsTypes[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }

    setIsSearching(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://punchscrapper.onrender.com/search?q=${encodeURIComponent(searchQuery.trim())}`
      );

      const data = await response.json();
      console.log(data)

      if (response.ok && data.status === "success") {
        setSearchResults(data.newsItems || []);
      } else {
        setSearchResults([]);
        setError(data.message || "No results found");
      }
    } catch (error: any) {
      console.error("Error searching news:", error);
      setError("An error occurred while searching. Please try again.");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
    setError(null);
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for news..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={isSearching || !searchQuery.trim()}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {isSearching ? "Searching..." : "Search"}
          </button>
          {hasSearched && (
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold"
            >
              Clear
            </button>
          )}
        </form>

        {/* Search Results */}
        {hasSearched && (
          <div className="mt-6">
            {isSearching ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Searching...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-500">{error}</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {searchResults.map((news) => (
                    <div
                      key={news._id}
                      onClick={() => navigate(`/news/${news._id}`)}
                      className="flex flex-col md:flex-row cursor-pointer group gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-300"
                    >
                      <div className="w-full md:w-64 h-48 md:h-40 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full group-hover:scale-105 duration-500 object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2 flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-red-500 duration-300">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {news.content?.substring(0, 150)}...
                        </p>
                        <p className="text-xs text-gray-500">{news.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

