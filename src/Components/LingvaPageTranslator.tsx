import  { useState, useEffect, useRef } from "react";

const LINGVA_API_URL = "https://lingva.ml/api/v1";
const LOCAL_STORAGE_KEY = "selectedLanguage";
const CACHE_KEY = "translationCache";

const translateText = async (text: string, targetLang: string) => {
  try {
    if (targetLang === "en") return text;

    const response = await fetch(`${LINGVA_API_URL}/en/${targetLang}/${encodeURIComponent(text)}`);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit exceeded. Slowing down requests.");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 sec
      }
      throw new Error("Failed to translate");
    }

    const data = await response.json();
    return data.translation;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};

export const LingvaPageTranslator = () => {
  const [targetLang, setTargetLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const translationCache = useRef<{ [key: string]: string }>({});

  // Load cache from localStorage
  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      translationCache.current = JSON.parse(cachedData);
    }

    const savedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedLang) {
      setTargetLang(savedLang);
    }
  }, []);

  // Save selected language to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, targetLang);
    if (targetLang !== "en") {
      translatePage();
    }
  }, [targetLang]);

  // Save cache to localStorage periodically
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(translationCache.current));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const translatePage = async () => {
    setLoading(true);
    const elements = document.body.querySelectorAll("*:not(script):not(style):not(meta):not(link)");
    let delay = 0;

    for (const element of elements) {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        const originalText = element.textContent?.trim();
        if (originalText) {
          const cacheKey = `${originalText}-${targetLang}`;

          if (translationCache.current[cacheKey]) {
            element.textContent = translationCache.current[cacheKey]; // Use cached translation
          } else {
            setTimeout(async () => {
              const translatedText = await translateText(originalText, targetLang);
              translationCache.current[cacheKey] = translatedText;
              element.textContent = translatedText;
            }, delay);
            delay += 500; // Space out requests to avoid rate limits
          }
        }
      }
    }

    setLoading(false);
  };

  return (
    <div className=" p-1 bg-black rounded-lg shadow-lg w-fit flex gap-1">
      <select
        className="p-1 border outline-none rounded-md"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="ha">Hausa</option>
        <option value="ig">Igbo</option>
        <option value="pt">Portuguese</option>
        <option value="st">Sesotho</option>
        <option value="sn">Shona</option>
        <option value="su">Sundanese</option>
        <option value="sw">Swahili</option>
        <option value="xh">Xhosa</option>
        <option value="yo">Yoruba</option>
        <option value="zu">Zulu</option>
      </select>
      <button
        className=" w-full bg-black border outline-none text-white rounded-md disabled:opacity-50"
        onClick={translatePage}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate Page"}
      </button>
    </div>
  );
};
