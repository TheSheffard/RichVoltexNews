const disclaimerItems = [
    {
        title: "General Information",
        content: "The information provided on our website is for general purposes only."
    },
    {
        title: "Accuracy",
        content: "While we strive to provide accurate content, we do not guarantee the completeness or reliability of the information."
    },
    {
        title: "External Links",
        content: "Our website may contain links to third-party sites. We are not responsible for their content or practices."
    },
    {
        title: "Affiliate Disclosure",
        content: "Some links on our site may be affiliate links, meaning we earn a commission if you make a purchase."
    },
    {
        title: "Changes to Disclaimer",
        content: "This disclaimer is subject to updates and modifications at any time."
    }
];

export const Disclaimer = () => (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Disclaimer</h1>
        {disclaimerItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                <p className="mt-1 text-gray-600">{item.content}</p>
            </div>
        ))}
        <div className="mt-4 text-gray-500 italic text-sm">
            Please note that this information is for informational purposes only.
        </div>
    </div>
);