import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
    return (
        <nav className='flex justify-center'>
            <div className='w-[1400px] flex justify-between items-center py-3'>
                {/*links*/}
                <div className="flex text-center gap-10 cursor-pointer">
                    <Image src='/RonenLogo.png' alt='search icon' width={280} height={200} />

                    <ul className="flex text-center gap-10 items-center">
                        <li>
                            <Link href="#home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#skills">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="#demonstration">
                             Demonstration
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
