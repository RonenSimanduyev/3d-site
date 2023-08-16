import React, { useState, useEffect } from "react";
import { FrontEnd } from "@/components/FrontEnd";
import { WebDevelopment } from "@/components/WebDevelopment";
import { WhereDesign } from "@/components/WhereDesign";
import { Life } from "@/components/Life";

export const Demonstration = () => {
    const data = ["Front End", "Web Development", "Where Design", "Comes To Life"];
    const [threeDImage, setThreeDImage] = useState<string>("Front End");
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {

        const popupTimeout = setTimeout(() => {
            setShowPopup(false);
        }, 5000); // Show the popup for 5 seconds

        return () => {
            clearTimeout(popupTimeout);
        };
    }, []);

    return (
        <div className="h-[100vh] snap-center flex justify-center" id="demonstration">
            <div className="w-[1400px] flex justify-between"  onMouseEnter={()=>setShowPopup(true) } onMouseLeave={()=>{setShowPopup(false)}}>
                {showPopup && (
                    <div className="absolute top-2 justify-center p-2 bg-gray-100 text-black border border-gray-300 rounded text-sm">
                        Drag the image for full experience.
                    </div>
                )}
                {/* Left side */}
                <div className="items-center flex basis-1/2">
                    <ul className="flex flex-col gap-[20px]">
                        {data.map((item: string) => (
                            <li
                                className="liclass"
                                key={item}
                                data-text={item}
                                onMouseEnter={() => {
                                    setThreeDImage(item);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right side */}
                <div className="flex basis-1/2 relative">

                    {threeDImage === "Front End" ? (
                        <FrontEnd />
                    ) : threeDImage === "Web Development" ? (
                        <WebDevelopment />
                    ) : threeDImage === "Where Design" ? (
                        <WhereDesign />
                    ) : (
                        <Life />
                    )}
                </div>
            </div>
        </div>
    );
};
