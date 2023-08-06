import { useState } from "react";

export const Works = () => {
    const data = ["Front End", "Web Development", "Where Design", "Comes To Life"];
    const [hoveredItem, setHoveredItem] = useState("");

    return (
        <div className="h-[100vh] snap-center flex justify-center">
            <div className="w-[1400px] flex justify-between">
                {/*left side*/}
                <div className="items-center flex basis-1/2">
                    <ul className="flex flex-col gap-[20px]">
                        {data.map((item) => (
                            <li
                                className="liclass"
                                key={item}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem("")}
                                data-text={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* right side */}
                <div></div>
            </div>
        </div>
    );
};
