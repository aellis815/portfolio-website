"use client";
import { useState, FormEvent } from "react";

interface FormInputData {
    email: string;
    subject: string;
    message: string;
}

export interface ResponseData {
    data: { message: string } | null;
    error: {
        message: string;
        name: string;
        statusCode: number;
    } | null;
}


const EmailSection: React.FC = () => {
    const [emailSubmit, setEmailSubmit] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    //event handler to handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data: FormInputData = {
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        }
        //validate that the form data is being passed correctly
        console.log(data);

        const JSONdata = JSON.stringify(data);
        //making sure stringify is behaving as intended
        console.log(JSONdata)

        const endpoint = "/api/send";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        console.log(response);
        if (!response.ok) {
            throw new Error("Http error! status: " + response.status)
        } else {
            const resData: ResponseData = await response.json();
            console.log(resData);
        }

        //if the response status is 200, then the email has been sent successfully
        if (response.status === 200) {
            console.log("Message Sent");
            setEmailSubmit(true);
            //reset the form
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }

    return (
        <section className="grid md:grid-cols-2 md:my-12 gap-4 relative">
            {/* Background Color Circle Thing - not married to it*/}
            {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 via-secondary-500 to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/4"></div> */}
            {/* First Column */}
            <div className="z-10">
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
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {/* EMAIL SECTION OF FORM */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block text-sm font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@email.com"
                            required
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                        />
                    </div>
                    {/* SUBJECT SECTION OF FORM */}
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject of your email"
                            required
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                        />
                    </div>
                    {/* MESSAGE SECTION OF FORM */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-[#181818] block border border-slate-600 plateholder-slate-600 text-white rounded-lg w-full p-2"
                            placeholder="Let's connect about..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-secondary-500 hover:bg-secondary-800 text-white font-medium py-2 px-5 rounded-lg w-full">
                        Submit Message
                    </button>
                    {
                        emailSubmit && (
                            <p className="text-green-700 text-sm mt-2">
                                Email sent Successfully
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    );
}

export default EmailSection