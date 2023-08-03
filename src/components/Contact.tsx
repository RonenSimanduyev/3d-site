import Lottie from "react-lottie";
// @ts-ignore
import EmailAnimation from 'public/email.json';
// @ts-ignore
import TelegramAnimation from 'public/telegram.json';
// @ts-ignore
import WhatsappAnimation from 'public/whatsapp.json';



export const Contact = () => {
    const option ={
        loop:true,
        autoplay:false,
        animationData:WhatsappAnimation

    }
    const lottie = (

    );


    return (
        <div className="h-[100vh] snap-center flex justify-center">
            <div className="w-[1400px] flex justify-between">
                {/*left side*/}
                <div className="items-center flex  justify-center basis-1/2">
                    <div>
                        <div>
                            <h1 className="text-[50px] ">contact me with:</h1>
                        </div>

                        <div>
                            <Lottie options ={option}/>
                        </div>
                    </div>

                </div>

                {/*right side*/}
                <div className="items-center flex">
                    left
                </div>
            </div>
        </div>
    );
};
