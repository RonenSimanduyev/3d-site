import { NavBar } from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import {
    MeshDistortMaterial,
    OrbitControls,
    Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Hero = () => {
    return (
        <div className="h-[100vh] snap-center flex flex-col items-center" id="home" >
            <NavBar />
            <div className="w-[1400px] flex flex-col md:flex-row justify-between items-center">
                {/* left side */}
                <div className=" basis-1/3 flex-col items-center gap-3">
                    <h1 className="text-[70px]">Your.  perfect.  Website.</h1>
                    <div className="flex items-center gap-4 " >
                        <Image src='/line.png' alt='line' width={20} height={5} className='h-[5px]'/>
                        <h4 className="text-[#da4ea2]">Who am I?</h4>
                    </div>

                    <p className="text-[20px] text-gray-200 ">Hey my name is Ronen Simanduyev and I have been a FullStack developer for nearly 2 years. I am looking for an opportunity to specialize in FrontEnd development</p>
                    <Link href="#contact">
                        <button className='bg-[#da4ea2] font-semibold my-5 py-2 px-4 rounded-2xl w-[150px]' >Hire Me</button>
                    </Link>

                </div>
                {/* right side */}
                <div className="flex basis-1/2 relative">
                    <div className='z-10 w-[800px] h-[600px] flex justify-center items-center'>
                        <Image
                            src="/Programmer-Illustration.png"
                            alt="programer"
                            width={600}
                            height={400}
                            className="w-[600px] h-[400px] object-contain animate-bounce-alternate"
                        />
                    </div>
                    <div className='absolute top-0 left-0 w-[800px] h-[600px]'>
                        <Canvas>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1}/>
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 200, 400]} scale={2.7} >
                                <MeshDistortMaterial color={'#877ef8'} attach='material' distort={0.5} speed={2} />
                            </Sphere>
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};


