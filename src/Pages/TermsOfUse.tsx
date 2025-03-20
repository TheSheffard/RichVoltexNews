const termsOfUseItems = [
    {
        title: "Use of Website",
        content: "You agree to use our website legally and ethically."
    },
    {
        title: "Intellectual Property",
        content: "All content, images, and logos are owned by us and may not be used without permission."
    },
    {
        title: "User Conduct",
        content: "Users must not engage in harmful activities, including spamming or hacking."
    },
    {
        title: "Liability Limitation",
        content: "We are not responsible for any damages resulting from the use of our website."
    },
    {
        title: "Termination",
        content: "We reserve the right to terminate access to users who violate our terms."
    }
];

export const TermsOfUse = () => (
    <div className="p-5 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Terms of Use</h1>
        {termsOfUseItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                <p className="mt-1 text-gray-600">{item.content}</p>
            </div>
        ))}
        <div className="mt-4 text-gray-500 italic text-sm">
            By accessing our website, you agree to these terms.
        </div>
    </div>
);