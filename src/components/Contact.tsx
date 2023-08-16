import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Cookies from 'js-cookie';
import { MapChart } from '@/components/MapChart';

// Helper function to calculate the time until the next day
function getTimeUntilNextDay() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow.getTime() - now.getTime();
}

interface ContactData {
    formRefType: React.MutableRefObject<HTMLFormElement>;
    emailJsData: string | undefined;
}

export const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [remainingTime, setRemainingTime] = useState<number | null>(null);

    const serviceId: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emailjs_service_id;
    const templateId: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emailjs_template_id;
    const public_key: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emails_Public_key;

    useEffect(() => {
        const submissionCount = parseInt(Cookies.get('submissionCount') || '0');
        if (submissionCount >= 2) {
            const timeUntilNextDay = getTimeUntilNextDay();
            setRemainingTime(timeUntilNextDay);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const submissionCount = parseInt(Cookies.get('submissionCount') || '0');

        if (submissionCount < 2) {
            // Perform form validation
            const isFormValid = formRef.current?.checkValidity();

            if (serviceId && templateId && public_key && formRef.current && isFormValid) {
                emailjs
                    .sendForm(serviceId, templateId, formRef.current, public_key)
                    .then(
                        (result: any) => {
                            console.log(result.text);
                            setSuccess(true);
                        },
                        (error: any) => {
                            console.log(error.text);
                            setSuccess(false);
                        }
                    );
            } else {
                setSuccess(false);
            }

            Cookies.set('submissionCount', (submissionCount + 1).toString(), { expires: 365 });
        } else {
            const timeUntilNextDay = getTimeUntilNextDay();
            setRemainingTime(timeUntilNextDay);
        }
    };

    return (
        <div className="h-[100vh] snap-center flex justify-center" id="contact">
            <div className="w-[100%] flex justify-between gap-[50px]">
                {/* Left side */}
                <div className="justify-center flex basis-1/2 items-center">
                    <div className="w-[500px] flex flex-col gap-[20px]">
                        <h1 className="font-extralight text-4xl">Contact me</h1>

                        {success === true && <p className="text-green-500">Form submitted successfully!</p>}
                        {success === false && <p className="text-red-500">Form submission failed. Please try again.</p>}
                        {success === null && (
                            <p className="text-gray-500">
                                Please fill out the form and click Send.
                                {remainingTime !== null && (
                                    <span>
                    You have reached the submission limit. You can submit again in{' '}
                                        {Math.ceil( remainingTime / (1000 * 60 * 60))} hours.
                  </span>
                                )}
                            </p>
                        )}
                        <form ref={formRef} className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                            <input
                                className="placeholder-black bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                className="placeholder-black bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                            />
                            <textarea
                                className="placeholder-black bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black h-[100px]"
                                placeholder="Your message"
                                name="message"
                                required
                            />
                            <button className="bg-[#da4ea2] p-3 rounded-md text-2xl" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right side */}
                <div className="items-center flex basis-1/2">
                    <MapChart />
                </div>
            </div>
        </div>
    );
};
