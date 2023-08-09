import Image from 'next/image';

interface Technology {
    name: string;
    imageSrc: string;
}

export const Skills = () => {
    const technologies: Technology[] = [
        { name: 'JavaScript', imageSrc: './Skills/javascript.svg' },
        { name: 'CSS', imageSrc: './Skills/css-icon.svg' },
        { name: 'HTML5', imageSrc: '/Skills/html5.svg' },
        { name: 'Node.js', imageSrc: '/Skills/node-js.png' },
        { name: 'TypeScript', imageSrc: './Skills/typescript.svg' },
        { name: 'React', imageSrc: '/Skills/React.png' },
        { name: 'Redux', imageSrc: '/Skills/reduxIcon.png' },
        { name: 'WordPress', imageSrc: '/Skills/wordpress.png' },
        { name: 'GitHub', imageSrc: '/Skills/github.png' },
        { name: 'Python', imageSrc: '/Skills/python.png' },
        { name: 'AWS', imageSrc: '/Skills/awsicon.png' },
        { name: 'Vercel', imageSrc: '/Skills/vercel.svg' },
    ];

    return (
        <div className="h-[100vh] snap-center flex flex-col items-center">
            <div className="w-[1400px] mt-[5%]">

                <h1 className="text-[70px] text-center mb-5">My Set Of Skills</h1>

                <div className='grid grid-cols-4 gap-5'>

                    {technologies.map((tech:Technology, index:number) => (
                        <div
                            key={index}
                            className='grid place-items-center my-[5%] relative transition-transform duration-300 hover:scale-110 hover:shadow-md'
                        >
                            <Image
                                src={tech.imageSrc}
                                alt={tech.name}
                                width={110}
                                height={110}
                            />
                            <div className="absolute inset-0 flex items-baseline justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-60 text-white font-bold text-3xl">
                                {tech.name}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};
