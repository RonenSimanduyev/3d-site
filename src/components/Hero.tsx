import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export const Hero = () => {
    return (
        <div className="h-[100vh] snap-center flex flex-col items-center">
            <NavBar />
            <div className="w-[1400px] flex flex-col md:flex-row justify-between items-center">
                {/* left side */}
                <div className="flex basis-1/3 flex-col items-center gap-3">
                    <h1 className="text-[70px]">Your.  perfect.  Website.</h1>
                    <div className="flex items-center gap-4">
                        <img src='./line.png' alt='line' className='h-[5px] '/>
                        <h4>what can I do?</h4>
                    </div>

                    <p>Short description about me</p>
                    <button>hire me</button>
                </div>
                {/* right side */}
                <div className="flex basis-2/3 ">
                    {/*<div className="flex items-center w-[70%] ">*/}
                        <img src="/moon.png" alt="moon" />
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
