import {OrbitControls, Stage} from "@react-three/drei";
import Ironman from "@/components/Ironman";
import {Canvas} from "@react-three/fiber";

export const Life =()=>{


    return(
        <Canvas>
            <Stage environment='city' intensity={0.2}>
                <Ironman/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )

}