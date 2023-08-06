import React, { useState } from 'react';
import {MapChart} from "@/components/MapChart";

export const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className="h-[100vh] snap-center flex justify-center">
            <div className="w-[100%] flex justify-between gap-[50px]">
                {/*left side*/}

                <div className="justify-center flex basis-1/2 items-center">
                    <div className="w-[500px] flex flex-col gap-[20px]">
                        {/*contact me header*/}
                        <h1 className="font-extralight text-4xl">Contact me</h1>

                        {/*contact form*/}
                        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                            <input className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black" type='text' placeholder="Name" />
                            <input className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black" type='email' placeholder="Email" />
                            <textarea className="bg-[#D3D3D3] p-[20px] border-none rounded-sm text-black h-[100px]" placeholder="Your message"></textarea>
                            <button className="bg-[#da4ea2] p-3 rounded-md text-2xl" type="submit">Send</button>
                        </form>
                    </div>
                </div>



                {/*right side*/}
                <div className="items-center flex basis-1/2">
                    <MapChart/>
                </div>
            </div>
        </div>


);
};