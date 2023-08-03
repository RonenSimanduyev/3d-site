

export const Works =()=>{
    const data = [
        "Front End",
        "Web Development",
        "Where Design",
        "Becomes Reality"

    ]

    return(
        <div className='h-[100vh] snap-center flex justify-center'>
            <div className="w-[1400px] flex justify-between">
                {/*left side*/}
                <div className="items-center flex basis-1/2 ">
                    <ul className="flex flex-col gap-[20px]">
                        {data.map((item)=>(
                            <li className="liclass"
                                >
                                {item}
                            </li>
                        ))}
                    </ul>


                </div>
                {/* right side  */}
                <div>

                </div>
            </div>
        </div>
    )
}