const privacyPolicyItems = [
    {
        title: "Information Collection",
        content: "We collect your browsing data."
    },
    {
        title: "Usage of Information",
        content: "We use your information to improve our services, send notifications, and personalize content."
    },
    {
        title: "Third-Party Sharing",
        content: "We do not sell or share your information with third parties except for essential service providers."
    },
    {
        title: "Cookies",
        content: "We use cookies to enhance user experience. You can disable cookies in your browser settings."
    },
    {
        title: "Policy Updates",
        content: "This policy may change from time to time. Please check regularly for updates."
    }
];

export const PrivacyPolicy = () => (
    <div className="p-5 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">
            We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
        </p>
        {privacyPolicyItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                <p className="mt-1 text-gray-600">{item.content}</p>
            </div>
        ))}
        <div className="mt-4 text-gray-500 italic text-sm">
            Please review this policy regularly for any updates.
        </div>
    </div>
);