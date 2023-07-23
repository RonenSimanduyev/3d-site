import Image from "next/image";

export const NavBar = () => {
    return (
        <nav className='flex justify-center'>
            <div className='w-[1400px] flex justify-between items-center py-3'>
                {/*links*/}
                <div className="flex text-center gap-10 cursor-pointer">
                    <Image src='/logo.png' alt='search icon' width={100} height={150} />

                    <ul className="flex text-center gap-10 items-center">
                        <li>Home</li>
                        <li>Studio</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/*icons*/}
                <div className="flex items-center gap-2">
                    <Image src='/search.png' alt='search icon' width={20} height={20} />
                    <button className="bg-[#da43a2] p-1 rounded-xl w-[100px]">
                        click me
                    </button>
                </div>
            </div>
        </nav>
    );
};
