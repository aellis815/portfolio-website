const EmailSection: React.FC = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            {/* First Column */}
            <div>
                <h5 className="text-xl font-bold text-white my-2">
                    Let's Chat
                </h5>
                <p className="text-slate-300 mb-4 max-w-md">
                    I am always open to new opportunities and collaborations. Feel free to reach out to me.
                    If you have any questions or ideas, I would love to hear from you.
                </p>
                <div className="socials flex flex-row"></div>
            </div>
            {/* Second Column */}
            <div>
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block text-sm font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@email.com"
                            required
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Subject of your email"
                            required
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                            placeholder="Let's connect about..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-5 rounded-lg w-full">Submit Message</button>
                </form>
            </div>
        </section>
    );
}

export default EmailSection