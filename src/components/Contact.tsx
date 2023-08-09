import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {MapChart} from "@/components/MapChart";

interface ContactData {
    formRefType:React.MutableRefObject<HTMLFormElement >;
    emailJsData:string | undefined;

}
export const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null); // Initial state is null

    const serviceId: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emailjs_service_id;
    const templateId: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emailjs_template_id;
    const public_key: ContactData['emailJsData'] = process.env.NEXT_PUBLIC_Emails_Public_key;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (serviceId && templateId && public_key && formRef.current) {
            // Perform your form validation here
            const isFormValid = true;
            if (isFormValid) {
                emailjs
                    .sendForm(serviceId, templateId, formRef.current, public_key)
                    .then(
                        (result :any) => {
                            console.log(result.text);
                            setSuccess(true); // Set success to true if the form submission is successful
                        },
                        (error : any ) => {
                            console.log(error.text);
                            setSuccess(false); // Set success to false if there's an error in form submission
                        }
                    );
            } else {
                setSuccess(false); // Set success to false if the form validation fails
            }
        } else {
            console.error('One or more required environment variables are missing or formRef is not defined.');
        }
    };

    return (
        <div className="h-[100vh] snap-center flex justify-center">
            <div className="w-[100%] flex justify-between gap-[50px]">
                {/*left side*/}
                <div className="justify-center flex basis-1/2 items-center">
                    <div className="w-[500px] flex flex-col gap-[20px]">
                        {/*contact me header*/}
                        <h1 className="font-extralight text-4xl">Contact me</h1>

                        {/* Display a success message if the form submission was successful */}
                        {success === true && <p>Form submitted successfully!</p>}
                        {/* Display an error message if the form submission failed */}
                        {success === false && <p>Form submission failed. Please try again.</p>}

                        {/*contact form*/}
                        <form ref={formRef} className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                            <input className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black" type="text" placeholder="Name" name='name' />
                            <input className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black" type="text" placeholder="Email" name='email' />
                            <textarea className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black h-[100px]" placeholder="Your message" name='message' />
                            <button className="bg-[#da4ea2] p-3 rounded-md text-2xl" type="submit">Send</button>
                        </form>
                    </div>
                </div>

                {/*right side*/}
                <div className="items-center flex basis-1/2">
                    <MapChart />
                </div>
            </div>
        </div>
    );
};