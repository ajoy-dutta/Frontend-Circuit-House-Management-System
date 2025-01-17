import { useState } from "react";
import AxiosInstance from "../../Components/Axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");  // Added errorMessage state


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "message" && value.length > 160) {
            setErrorMessage("Message cannot exceed 160 characters.");
        } else {
            setErrorMessage(`${160 - value.length} characters remaining`);
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");

        try {
            const response = await AxiosInstance.post("/contact/", formData);

            if (response.status === 200 || response.status === 201) {
                setResponseMessage("Thank you for contacting us!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMessage("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setResponseMessage("An error occurred. Please try again later.");
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md rounded-lg bg-slate-100 px-10 pb-10 pt-8 shadow-md">
                <div className="mb-6">
                    <h2 className="text-center text-3xl font-semibold tracking-tight">Contact Us</h2>
                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                </div>
                <form className="w-full space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="name"
                            placeholder="Enter Your Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_email">
                            Email
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Enter Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_email">
                            Phone
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_phone"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_message">
                            Message (max 160 characters)
    </label>
                        <textarea
                            className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_message"
                            placeholder="What's on your mind?"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={160}  // Limit to 160 characters
                            required
                        />

                        {/* Show remaining characters or error message */}
                        <p className={`text-sm mt-1 ${errorMessage ? 'text-red-500' : 'text-gray-500'}`}>
                            {errorMessage}
                        </p>
                    </div>

                    <button
                        className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
                {responseMessage && (
                    <p className="mt-4 text-center text-sm font-medium text-zinc-600 dark:text-zinc-600">
                        {responseMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Contact;
