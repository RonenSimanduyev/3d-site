import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export const Who = () => {
    return (
        <div className="h-[100vh] snap-center flex flex-col items-center">
            <div className="w-[1400px] mt-[10%] flex flex-col md:flex-row justify-between items-center">
                {/* left side */}
                <div className="flex basis-1/3 relative">
                    <img
                        src="/moon.png"
                        alt="moon"
                        className="w-[800px] h-[600px] object-contain  animate-bounce-alternate"
                    />
                </div>
                {/* right side */}

                <div className=" basis-1/3 flex-col items-center gap-3">
                    <h1 className="text-[70px]">My Set Of Skills</h1>
                    <div className="flex items-center gap-4 " >
                        <img src='./line.png' alt='line' className='h-[5px]  '/>
                        <h4 className="text-[#da4ea2]">what can I do?</h4>
                    </div>

                    <p className="text-[24px] text-gray-200 ">my sey</p>
                    <button className='bg-[#da4ea2] font-semibold  py-2 px-4 ' >hire me</button>
                </div>
            </div>
        </div>
    );
};
