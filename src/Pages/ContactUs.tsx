export const ContactUs = () => (
    <div className="p-5 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="mb-4 text-gray-600">
            We value your feedback and inquiries. Please reach out to us through the email below or fill out the form.
        </p>
        <p className="mb-6 text-gray-700">
            Email: <a href="mailto:Emmanueltokyo24@gmail.com" className="text-blue-600 underline">Emmanueltokyo24@gmail.com</a>
        </p>
        
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Email"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-700">Message:</label>
                <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Message"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Send Message
            </button>
        </form>
    </div>
);